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
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.signInForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    });
  }

  public get loginControl(): FormControl<string | null> {
    return this.signInForm.controls.login;
  }

  public get login(): string {
    return this.signInForm.controls.login.value ?? 'Your Name';
  }

  public onSubmit(username: string): void {
    this.authService.signIn(username);
  }
}
