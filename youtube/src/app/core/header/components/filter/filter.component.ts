import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VideosService } from '../../../services/videos.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public filterForm!: FormGroup<{ filter: FormControl<string | null> }>;
  constructor(private videosService: VideosService) {}

  get searchControl() {
    return this.filterForm.controls.filter;
  }

  sortByViews() {
    this.videosService.sortByViews();
  }

  sortByDate() {
    this.videosService.sortByDate();
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
