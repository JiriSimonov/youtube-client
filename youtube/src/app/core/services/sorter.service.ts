import { Injectable } from '@angular/core';
import { VideosService } from './videos.service';

@Injectable({
  providedIn: 'root',
})
export class SorterService {
  private sortByViewsDirection = false;
  private sortByDateDirection = false;

  constructor(private videosService: VideosService) {}

  convertToValidDate(date: Date) {
    return new Date(date);
  }

  sortByViews() {
    this.sortByViewsDirection
      ? this.videosService.changeVideos(
          this.videosService.videos.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount),
        )
      : this.videosService.changeVideos(
          this.videosService.videos.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount),
        );
    this.sortByViewsDirection = !this.sortByViewsDirection;
  }

  sortByDate() {
    this.sortByDateDirection
      ? this.videosService.changeVideos(
          this.videosService.videos.sort(
            (a, b) => +this.convertToValidDate(b.snippet.publishedAt) - +this.convertToValidDate(a.snippet.publishedAt),
          ),
        )
      : this.videosService.changeVideos(
          this.videosService.videos.sort(
            (a, b) => +this.convertToValidDate(a.snippet.publishedAt) - +this.convertToValidDate(b.snippet.publishedAt),
          ),
        );
    this.sortByDateDirection = !this.sortByDateDirection;
  }
}
