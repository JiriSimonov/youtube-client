import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SorterService } from 'src/app/core/services/sorter.service';
import { VideosService } from 'src/app/core/services/videos.service';
import { SortCriteria } from 'src/app/youtube/pipes/sort.pipe';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public filterForm!: FormGroup<{ filter: FormControl<string | null> }>;
  constructor(private videosService: VideosService, private sorterService: SorterService) {}

  get searchControl() {
    return this.filterForm.controls.filter;
  }

  sortByCriteria(criteria: SortCriteria, direction: number) {
    this.sorterService.changeSort({ criteria, direction });
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      filter: new FormControl<string>(''),
    });
    this.searchControl.valueChanges.pipe().subscribe((searchValue) => {
      this.videosService.filterVideos(searchValue ?? '');
    });
  }
}
