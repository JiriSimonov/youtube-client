import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpVideosService } from './http-videos.service';
import { SearchItem } from '../header/models/search.item';
import { SearchResponse } from '../header/models/search.response';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videos$$ = new BehaviorSubject<SearchItem[]>([]);

  private filterValue$$ = new BehaviorSubject('');

  public videos$ = combineLatest([this.videos$$, this.filterValue$$]).pipe(
    map(([arr, str]) => arr.filter((item) => item.snippet.title.toLowerCase().includes(str.toLowerCase()))),
  );

  constructor(private httpVideosService: HttpVideosService) {}

  public getVideos(): Observable<SearchResponse> {
    return this.httpVideosService.getVideos().pipe(
      tap((videos) => {
        this.videos$$.next(videos.items);
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
