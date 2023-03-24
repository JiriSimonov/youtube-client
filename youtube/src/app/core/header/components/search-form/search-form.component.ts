import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, filter, startWith, Subscription, tap } from 'rxjs';
import { VideosService } from 'src/app/core/services/videos.service';
import { getVideos } from 'src/app/youtube/store/actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public searchForm!: FormGroup<{ search: FormControl<string | null> }>;
  private subs = new Subscription();

  constructor(private videosService: VideosService, private store: Store) {}

  public get searchControl(): FormControl<string | null> {
    return this.searchForm.controls.search;
  }

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl<string | null>('', [Validators.required]),
    });
    this.subs.add(
      this.searchControl.valueChanges
        .pipe(
          startWith(''),
          debounceTime(800),
          filter((search: string | null) => (search ? search.length > 3 : search === '')),
          tap(() => this.store.dispatch(getVideos({ search: this.searchControl.value ?? '' }))),
        )
        .subscribe(),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
