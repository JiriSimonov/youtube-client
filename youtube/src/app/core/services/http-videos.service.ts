import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../header/models/search.response';

@Injectable({
  providedIn: 'root',
})
export class HttpVideosService {
  constructor(private http: HttpClient) {}

  public getVideos(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>('assets/data.json');
  }
}
