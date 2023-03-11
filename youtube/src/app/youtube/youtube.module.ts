import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from '../core/material/material.module';
import { BackgroundImageDirective } from './directives/background-image.directive';
import { MatCardModule } from '@angular/material/card';
import { YoutubeVideoPageComponent } from './pages/youtube-video-page/youtube-video-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    YoutubePageComponent,
    VideosComponent,
    VideoComponent,
    BackgroundImageDirective,
    YoutubeVideoPageComponent,
    VideoDetailsComponent,
    BorderColorDirective,
  ],
  imports: [CommonModule, MaterialModule, MatCardModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
