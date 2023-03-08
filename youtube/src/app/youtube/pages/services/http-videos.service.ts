import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../../../core/header/models/search.response';

@Injectable({
  providedIn: 'root',
})
export class HttpVideosService {
  constructor(private http: HttpClient) {}
  getVideos() {
    return this.http.get<SearchResponse>('assets/data.json');
  }
}
