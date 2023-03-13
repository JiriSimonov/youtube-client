import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, startWith, switchMap, throttleTime } from 'rxjs';
import { VideosService } from '../../../services/videos.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  public searchForm!: FormGroup<{ search: FormControl<string | null> }>;

  constructor(private videosService: VideosService) {}

  get searchControl() {
    return this.searchForm.controls.search;
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl<string>('', [Validators.required]),
    });
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(800),
        switchMap(() => this.videosService.getVideos()),
      )
      .subscribe();
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
