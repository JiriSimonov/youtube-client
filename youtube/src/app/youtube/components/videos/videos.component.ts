import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VideosService } from '../../../core/services/videos.service';
import { SearchItem } from '../../../core/header/models/search.item';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent {
  public videos$ = this.videosService.videos$;

  constructor(private videosService: VideosService) {}

  trackBy(_: number, video: SearchItem) {
    return video.id;
  }
}
