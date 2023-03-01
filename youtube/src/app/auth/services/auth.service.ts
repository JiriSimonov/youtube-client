import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service'
import { UserData } from 'src/app/youtube/models/user-data'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$$ = new BehaviorSubject<UserData>({
    username: 'login',
    password: 'password',
  })
  public user$ = this.user$$.asObservable()
  private isUser$$ = new BehaviorSubject<boolean>(
    this.localStorageService.getItem('authData') ? true : false
  )
  public isUser$ = this.isUser$$.asObservable()
  constructor(private localStorageService: LocalStorageService) {}

  isUser(): boolean {
    return this.isUser$$.value
  }

  signIn(userData: UserData): void {
    this.isUser$$.next(true)
    this.user$$.next(userData)
    this.localStorageService.setItem('authData', userData)
  }

  signOut(): void {
    this.isUser$$.next(false)
    this.user$$.next({ username: 'login', password: 'password' })
    this.localStorageService.removeItem('authData')
  }
}
