import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Videos } from '../models/videos.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpVideosService {
  constructor(private http: HttpClient) {}

  public getVideos(value: string): Observable<Videos> {
    return this.http
      .get<SearchResponse>('search', {
        params: {
          key: environment.API_KEY,
          type: 'video',
          maxResults: 16,
          q: value,
        },
      })
      .pipe(
        switchMap((videosFromAPI) => {
          const videoIds: string = videosFromAPI.items.map((video) => video.id.videoId).join(',');
          return this.getVideosById(videoIds);
        }),
      );
  }

  public getVideosById(id: string): Observable<Videos> {
    return this.http.get<Videos>('videos', {
      params: {
        key: environment.API_KEY,
        id,
        part: 'snippet,statistics',
      },
    });
  }
}
