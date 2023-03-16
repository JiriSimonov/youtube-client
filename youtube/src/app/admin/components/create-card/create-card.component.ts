import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      title: new FormControl(),
      description: new FormControl(),
      img: new FormControl(),
      link: new FormControl(),
    });
  }
}
