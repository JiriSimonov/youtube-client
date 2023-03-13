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
  private initialVideosList: SearchItem[] = [];
  public videos$ = combineLatest([this.videos$$, this.filterValue$$]).pipe(
    map(([arr, str]) => arr.filter((item) => item.snippet.title.toLowerCase().includes(str.toLowerCase()))),
  );
  constructor(private httpVideosService: HttpVideosService) {}

  getVideos() {
    return this.httpVideosService.getVideos().pipe(
      tap((videos) => {
        this.videos$$.next(videos.items);
        this.initialVideosList = videos.items;
      }),
    );
  }

  resetVideosList() {
    this.videos$$.next(this.initialVideosList);
    this.filterValue$$.next('');
  }

  get videos() {
    return this.videos$$.value;
  }

  changeVideos(videos: SearchItem[]) {
    this.videos$$.next(videos);
  }

  filterVideos(value: string) {
    this.filterValue$$.next(value);
  }
}
