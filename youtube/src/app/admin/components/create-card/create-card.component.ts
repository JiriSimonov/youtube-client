import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCard } from 'src/app/core/store/actions';
import { datePattern } from 'src/app/shared/validators/date-pattern';
import { isValidDate } from 'src/app/shared/validators/date.validator';
import { urlPattern } from 'src/app/shared/validators/url-pattern';
import { CustomCard } from '../../models/custom-card.model';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCardComponent implements OnInit {
  public createForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
    date: FormControl<string | null>;
  }>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      link: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      date: new FormControl('', [Validators.required, isValidDate(), Validators.pattern(datePattern)]),
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

  public onSubmit(): void {
    const card: CustomCard = {
      title: this.titleControl.value ?? '',
      description: this.descriptionControl.value ?? '',
      imgLink: this.imgControl.value ?? '',
      videoLink: this.imgControl.value ?? '',
      creationAt: this.dateControl.value ?? '',
    };
    this.store.dispatch(setCard({ card }));
    this.router.navigate(['/youtube']).catch();
    this.createForm.reset();
  }
}
