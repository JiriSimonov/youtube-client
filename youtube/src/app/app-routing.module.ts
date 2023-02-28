import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { isUser } from './core/guards/is-user.guard'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then((module) => module.YoutubeModule),
    canMatch: [isUser],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
