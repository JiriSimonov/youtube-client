import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUser$$ = new BehaviorSubject<string>('Your Name');
  public isUser$ = this.isUser$$.asObservable();

  constructor(private router: Router) {}

  public signIn(username: string): void {
    this.isUser$$.next(username);
    localStorage.setItem('auth', username);
    this.router.navigate(['youtube'], { replaceUrl: true }).catch();
  }

  public signOut(): void {
    this.isUser$$.next('Your Name');
    localStorage.clear();
  }
}
