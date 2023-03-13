import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/core/header/models/search.item';

type SortMap = Record<SortCriteria, (a: SearchItem, b: SearchItem) => number>;
export type SortCriteria = 'views' | 'date' | 'none';
const sortMap: SortMap = {
  views: (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
  date: (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt),
  none: () => 0,
};

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: SearchItem[] | null, criterias: [SortCriteria, number] | []): SearchItem[] {
    return value && criterias.length === 2
      ? value.sort((a, b) => sortMap[criterias[0]](a, b) * criterias[1])
      : value ?? [];
  }
}
