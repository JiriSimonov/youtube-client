import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { debounceTime, filter, Observable, startWith, Subscription, switchMap, tap } from 'rxjs';
import { SearchItem } from 'src/app/core/models/search-item.models';
import { VideosService } from 'src/app/core/services/videos.service';
import { VideosState } from 'src/app/youtube/store/models/videos-state.model';
import { getVideos } from 'src/app/youtube/store/store/actions';
import { selectIsVideosLoading, selectVideos } from 'src/app/youtube/store/store/selectors';
import { AppState } from '../../../models/app-state.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public searchForm!: FormGroup<{ search: FormControl<string | null> }>;
  private subs = new Subscription();

  constructor(private videosService: VideosService, private store: Store<AppState>) {}

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
