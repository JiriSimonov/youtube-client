import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { map } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'

export const isGuest = () => {
  const router = inject(Router)
  return inject(AuthService).isUser$.pipe(
    map((isUser) => !isUser || router.createUrlTree(['youtube']))
  )
}
