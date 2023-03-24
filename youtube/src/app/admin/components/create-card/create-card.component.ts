import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import { isValidDate } from 'src/app/shared/validators/date.validator';
import { urlPattern } from 'src/app/shared/validators/url-pattern';
import { selectIsVideosLoading } from 'src/app/youtube/store/store/selectors';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  public isLoading$ = this.store.select(selectIsVideosLoading);
  constructor(private store: Store<AppState>) {}
  public createForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
    date: FormControl<string | null>;
  }>;

  public ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      link: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      date: new FormControl('', [Validators.required, isValidDate()]),
    });
  }

  public get titleControl(): FormControl<string | null> {
    return this.createForm.controls.title;
  }

  public get descriptionControl(): FormControl<string | null> {
    return this.createForm.controls.description;
  }

  public get imgControl(): FormControl<string | null> {
    return this.createForm.controls.img;
  }

  public get linkControl(): FormControl<string | null> {
    return this.createForm.controls.link;
  }

  public get dateControl(): FormControl<string | null> {
    return this.createForm.controls.date;
  }
}
