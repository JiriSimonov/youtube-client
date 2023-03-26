import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidPassword } from 'src/app/shared/validators/password.validator';
import { AuthService } from '../../services/auth.service';

const DEFAULT_USERNAME = 'Your Name';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      password: new FormControl('', [Validators.required, Validators.minLength(8), isValidPassword()]),
    });
  }

  public get loginControl(): FormControl<string | null> {
    return this.signInForm.controls.login;
  }

  public get passwordControl(): FormControl<string | null> {
    return this.signInForm.controls.password;
  }

  public get login(): string {
    return this.signInForm.controls.login.value ?? DEFAULT_USERNAME;
  }

  public onSubmit(username: string): void {
    this.authService.signIn(username);
  }
}
