import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SorterService } from 'src/app/core/services/sorter.service';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public filterForm!: FormGroup<{ filter: FormControl<string | null> }>;
  private sortByViewsDirection = 1;
  private sortByDateDirection = 1;
  constructor(private videosService: VideosService, private sorterService: SorterService) {}

  get searchControl() {
    return this.filterForm.controls.filter;
  }

  sortByViews() {
    this.sorterService.sortBy('views', this.sortByViewsDirection);
    this.sortByViewsDirection = this.sortByViewsDirection * -1;
  }

  sortByDate() {
    this.sorterService.sortBy('date', this.sortByDateDirection);
    this.sortByDateDirection = this.sortByDateDirection * -1;
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
