import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YoutubePageComponent} from "./youtube/pages/youtube-page/youtube-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: YoutubePageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
