import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUser$$ = new BehaviorSubject<string | null>(this.localStorage.getItem('auth'));
  public isUser$ = this.isUser$$.asObservable();

  constructor(private router: Router, private localStorage: LocalStorageService) {}

  public signIn(username: string): void {
    this.isUser$$.next(username);
    this.localStorage.setItem('auth', username);
    this.router.navigate(['youtube'], { replaceUrl: true }).catch();
  }

  public logout(): void {
    this.isUser$$.next(null);
    this.localStorage.clear();
  }
}
