import { Injectable } from '@angular/core';
import { HttpVideosService } from './http-videos.service';
import { BehaviorSubject, tap } from 'rxjs';
import { SearchItem } from '../../../core/header/models/search.item';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videos$$ = new BehaviorSubject<SearchItem[]>([]);
  public videos$ = this.videos$$.asObservable();
  constructor(private httpVideosService: HttpVideosService) {}
  getVideos() {
    return this.httpVideosService.getVideos().pipe(tap((videos) => this.videos$$.next(videos.items)));
  }
}
