import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectVideos } from 'src/app/youtube/store/selectors';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private filterValue$$ = new BehaviorSubject('');
  public videos$ = combineLatest([this.store.select(selectVideos), this.filterValue$$]).pipe(
    map(([arr, str]) => arr.filter((item) => item.snippet.title.toLowerCase().includes(str.toLowerCase()))),
  );

  constructor(private store: Store) {}

  public filterVideos(value: string): void {
    this.filterValue$$.next(value);
  }
}
