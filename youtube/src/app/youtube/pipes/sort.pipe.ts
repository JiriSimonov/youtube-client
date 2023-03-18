import { Pipe, PipeTransform } from '@angular/core';
import { SortOptions } from 'src/app/shared/models/sort-options.model';
import { SearchItem } from '../../core/models/search-item.models';

type SortMap = Record<SortCriteria, (a: SearchItem, b: SearchItem) => number>;
export type SortCriteria = 'views' | 'date';
const sortMap: SortMap = {
  views: (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
  date: (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt),
};

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(value: SearchItem[] | null, criterias: SortOptions | null): SearchItem[] {
    return value && criterias
      ? value.sort((a, b) => sortMap[criterias.criteria](a, b) * criterias.direction)
      : value ?? [];
  }
}
