import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  public username!: string;
  private subs = new Subscription();
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.subs.add(
      this.authService.isUser$
        .pipe(
          tap((username) => {
            this.username = username || 'Your Name';
          }),
        )
        .subscribe(),
    );
  }
  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
