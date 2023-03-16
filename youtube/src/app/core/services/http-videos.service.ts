import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { SearchResponse, Videos } from '../header/models/search.response';
import { environment } from 'src/environment/environment';

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
          maxResults: environment.MAX_RESULTS,
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
