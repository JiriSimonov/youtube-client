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
  constructor(private videosService: VideosService, private sorterService: SorterService) {}

  get searchControl() {
    return this.filterForm.controls.filter;
  }

  sortByViews() {
    this.sorterService.sortByViews();
  }

  sortByDate() {
    this.sorterService.sortByDate();
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
