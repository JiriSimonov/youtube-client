import { Injectable } from '@angular/core';
import { HttpVideosService } from './http-videos.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SearchItem } from '../header/models/search.item';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videos$$ = new BehaviorSubject<SearchItem[]>([]);
  private filterValue$$ = new BehaviorSubject('');
  public videos$ = combineLatest([this.videos$$, this.filterValue$$]).pipe(
    map(([arr, str]) => arr.filter((item) => item.snippet.title.toLowerCase().includes(str.toLowerCase()))),
  );
  private sortViewsDirection = false;
  private sortDateDirection = false;
  constructor(private httpVideosService: HttpVideosService) {}
  getVideos() {
    return this.httpVideosService.getVideos().pipe(tap((videos) => this.videos$$.next(videos.items)));
  }

  sortByViews() {
    this.sortViewsDirection
      ? this.videos$$.next(this.videos$$.value.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount))
      : this.videos$$.next(this.videos$$.value.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount));
    this.sortViewsDirection = !this.sortViewsDirection;
  }

  sortByDate() {
    console.log(this.videos$$.value);
    this.sortDateDirection
      ? this.videos$$.next(
          this.videos$$.value.sort(
            (a, b) => +this.convertToDate(b.snippet.publishedAt) - +this.convertToDate(a.snippet.publishedAt),
          ),
        )
      : this.videos$$.next(
          this.videos$$.value.sort(
            (a, b) => +this.convertToDate(a.snippet.publishedAt) - +this.convertToDate(b.snippet.publishedAt),
          ),
        );
    this.sortDateDirection = !this.sortDateDirection;
  }

  convertToDate(value: Date) {
    return new Date(value);
  }

  filterVideos(value: string) {
    this.filterValue$$.next(value);
  }
}
