import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  public isUser$ = this.authService.isUser$;
  constructor(private authService: AuthService, private router: Router) {}

  public logOut(): void {
    this.authService.signOut();
    this.router.navigate(['auth'], { replaceUrl: true }).catch();
  }
}
