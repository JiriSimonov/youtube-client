import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public subs = new Subscription()
  username$ = this.authService.username$
  isUser$ = this.authService.isUser$

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  signOut(): void {
    this.authService.signOut()
  }
}
