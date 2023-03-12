import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../header/models/search.item';

type SortCriteria = 'views' | 'date';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  private sortMap: Record<SortCriteria, (a: SearchItem, b: SearchItem) => number>;

  constructor() {
    this.sortMap = {
      views: (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
      date: (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt),
    };
  }
  /* sortBy(criteria: SortCriteria, direction: number) { */
  /*   this.videosService.changeVideos(this.videosService.videos.sort((a, b) => this.sortMap[criteria](a, b) * direction)); */
  /* } */

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return null;
  }
}
