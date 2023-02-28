import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component'
import { YoutubeVideosComponent } from './components/youtube-videos/youtube-videos.component'
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component'
import { YoutubeRoutingModule } from './youtube-routing.module'

@NgModule({
  declarations: [
    YoutubePageComponent,
    YoutubeVideosComponent,
    YoutubeVideoComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
