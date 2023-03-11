import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
import { YoutubeVideoPageComponent } from './pages/youtube-video-page/youtube-video-page.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubePageComponent,
  },
  {
    path: ':videoId',
    component: YoutubeVideoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
