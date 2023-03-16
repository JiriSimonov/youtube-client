import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInForm!: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    });
  }

  public get username(): string {
    return this.signInForm.controls.username.value ?? 'Your Name';
  }

  public onSubmit(username: string): void {
    this.authService.signIn(username);
  }
}
