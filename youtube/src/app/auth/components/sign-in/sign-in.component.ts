import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserData } from 'src/app/youtube/models/user-data'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInForm!: FormGroup

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
    })
  }

  get usernameControl() {
    return this.signInForm.get('username')
  }

  get passwordControl() {
    return this.signInForm.get('password')
  }

  onSubmit(userData: UserData): void {
    this.authService.signIn(userData)
    this.router.navigate(['youtube'], { replaceUrl: true }).catch()
    console.log(this.signInForm.value)
  }
}
