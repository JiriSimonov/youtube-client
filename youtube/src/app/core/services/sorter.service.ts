import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortCriteria } from 'src/app/youtube/pipes/sort.pipe';

@Injectable({
  providedIn: 'root',
})
export class SorterService {
  private sort$$ = new BehaviorSubject<{ direction: number; criteria: SortCriteria } | null>(null);
  public sort$ = this.sort$$.asObservable();
  changeSort(value: { direction: number; criteria: SortCriteria }) {
    this.sort$$.next(value);
  }
}
