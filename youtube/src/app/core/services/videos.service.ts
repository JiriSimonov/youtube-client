import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectVideos } from 'src/app/youtube/store/store/selectors';
import { SearchItem } from '../models/search-item.models';
import { AppState } from '../models/app-state.model';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videos$$ = new BehaviorSubject<SearchItem[]>([]);
  private filterValue$$ = new BehaviorSubject('');

  public videos$ = combineLatest([this.videos$$, this.filterValue$$]).pipe(
    map(([arr, str]) => arr.filter((item) => item.snippet.title.toLowerCase().includes(str.toLowerCase()))),
  );

  constructor(private store: Store<AppState>) {}

  public getVideos(): Observable<SearchItem[]> {
    return this.store.select(selectVideos).pipe(
      tap((videos) => {
        console.log(videos);
        this.videos$$.next(videos);
      }),
    );
  }

  public changeVideos(videos: SearchItem[]): void {
    this.videos$$.next(videos);
  }

  public resetVideosList(): void {
    this.filterValue$$.next('');
  }

  public filterVideos(value: string): void {
    this.filterValue$$.next(value);
  }
}
