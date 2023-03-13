import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from '../core/material/material.module';
import { YoutubeVideoPageComponent } from './pages/youtube-video-page/youtube-video-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { VideoStatisticsComponent } from '../shared/components/video-statistics/video-statistics.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    YoutubePageComponent,
    VideosComponent,
    VideoComponent,
    YoutubeVideoPageComponent,
    VideoDetailsComponent,
    BorderColorDirective,
    SortPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
    YoutubeRoutingModule,
    VideoStatisticsComponent,
    NgOptimizedImage,
  ],
})
export class YoutubeModule {}
