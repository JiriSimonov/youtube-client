import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LocalStorageService } from '../storage/services/local-storage.service';

export const isUserGuard = (): UrlTree | true => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  return localStorageService.getItem('auth') || router.createUrlTree(['auth']);
};
