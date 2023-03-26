import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SorterService } from 'src/app/core/services/sorter.service';
import { VideosService } from 'src/app/core/services/videos.service';
import { SortCriteria } from 'src/app/youtube/pipes/sort.pipe';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  public filterForm!: FormGroup<{ filter: FormControl<string | null> }>;
  private subs = new Subscription();

  constructor(private videosService: VideosService, private sorterService: SorterService) {}

  public ngOnInit(): void {
    this.filterForm = new FormGroup({
      filter: new FormControl<string>(''),
    });
    this.subs.add(
      this.filterControl.valueChanges.subscribe((searchValue) => {
        this.videosService.filterVideos(searchValue ?? '');
      }),
    );
  }

  private get filterControl(): FormControl<string | null> {
    return this.filterForm.controls.filter;
  }

  public sortByCriteria(criteria: SortCriteria, direction: number): void {
    this.sorterService.changeSort({ criteria, direction });
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
