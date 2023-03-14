import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isGuestGuard } from './core/guards/is-guest.guard';
import { isUserGuard } from './core/guards/is-user.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canMatch: [isUserGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canMatch: [isGuestGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./core/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
