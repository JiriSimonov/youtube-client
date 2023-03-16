import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LocalStorageService } from '../storage/services/local-storage.service';

export const isUserGuard =
  (type: 'guest' | 'user'): (() => boolean | UrlTree) =>
  () => {
    const router = inject(Router);
    const localStorageService = inject(LocalStorageService);
    const isUser = !!localStorageService.getItem('auth');
    return type === 'user' ? isUser || router.createUrlTree(['auth']) : !isUser || router.createUrlTree(['youtube']);
  };
