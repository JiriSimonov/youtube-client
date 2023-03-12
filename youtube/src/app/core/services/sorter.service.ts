import { Injectable } from '@angular/core';
import { SearchItem, Statistics } from '../header/models/search.item';
import { VideosService } from './videos.service';

type SortCriteria = 'views' | 'date';

@Injectable({
  providedIn: 'root',
})
export class SorterService {
  private sortMap: Record<SortCriteria, (a: SearchItem, b: SearchItem) => number>;

  constructor(private videosService: VideosService) {
    this.sortMap = {
      views: (a, b) => +b.statistics.viewCount - a.statistics.viewCount,
      date: (a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt),
    };
  }

  sortBy(criteria: SortCriteria, direction: number) {
    this.videosService.changeVideos(this.videosService.videos.sort((a, b) => this.sortMap[criteria](a, b) * direction));
  }
}
