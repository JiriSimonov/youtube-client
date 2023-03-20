import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, startWith, Subscription, switchMap } from 'rxjs';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public searchForm!: FormGroup<{ search: FormControl<string | null> }>;

  private subs = new Subscription();

  constructor(private videosService: VideosService) {}

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
          switchMap(() => this.videosService.getVideos(this.searchControl.value ?? '')),
        )
        .subscribe(),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
