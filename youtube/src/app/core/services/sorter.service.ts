import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortOptions } from 'src/app/shared/models/sort-options.model';

@Injectable({
  providedIn: 'root',
})
export class SorterService {
  private sort$$ = new BehaviorSubject<SortOptions | null>(null);
  public sort$ = this.sort$$.asObservable();

  public changeSort(value: SortOptions): void {
    this.sort$$.next(value);
  }
}
