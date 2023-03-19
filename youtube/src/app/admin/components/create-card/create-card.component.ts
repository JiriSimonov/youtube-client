import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { urlPattern } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  public createForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
  }>;

  public ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      link: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
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
}
