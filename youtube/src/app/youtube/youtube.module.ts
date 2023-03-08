import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from '../core/material/material.module';
import { BackgroundImageDirective } from './directives/background-image.directive';
import { ElementSizeDirective } from './directives/element-size.directive';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: YoutubePageComponent,
  },
];

@NgModule({
  declarations: [
    YoutubePageComponent,
    VideosComponent,
    VideoComponent,
    BackgroundImageDirective,
    BackgroundImageDirective,
    ElementSizeDirective,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, MatCardModule],
})
export class YoutubeModule {}
