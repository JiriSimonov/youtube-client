import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  public searchForm!: FormGroup;
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
    });
    this.searchForm.valueChanges.pipe(throttleTime(800)).subscribe();
  }
  onSubmit() {
    console.log(this.searchForm.value);
  }
}
