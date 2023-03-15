import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    canMatch: [isUserGuard('user')],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canMatch: [isUserGuard('guest')],
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
