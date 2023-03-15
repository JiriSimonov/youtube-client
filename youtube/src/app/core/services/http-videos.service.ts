import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { ResponseItem, SearchResponse, Videos } from '../header/models/search.response';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';
import { SearchItem } from '../header/models/search.item';

@Injectable({
  providedIn: 'root',
})
export class HttpVideosService {
  constructor(private http: HttpClient) {}

  public getVideos(value: string): Observable<Videos> {
    const MAX_RESULTS = 15;
    return this.http.get<SearchResponse>(`search?key=&type=video&maxResults=${MAX_RESULTS}&q=${value}`).pipe(
      switchMap((videosFromAPI) => {
        const videoIds: string = videosFromAPI.items.map((item) => item.id.videoId).join(',');
        return this.getVideosById(videoIds);
      }),
    );
  }

  public getVideosById(id: string): Observable<Videos> {
    return this.http.get<any>(`videos?key=&id=${id}&part=snippet,statistics`);
  }
}
