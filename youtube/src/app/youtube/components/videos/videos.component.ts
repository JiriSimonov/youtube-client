import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideosService } from '../../pages/services/videos.service';
import { Subscription } from 'rxjs';
import { SearchItem } from '../../../core/header/models/search.item';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit, OnDestroy {
  private videosSubs = new Subscription();
  public videos$ = this.videosService.videos$;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosSubs.add(this.videosService.getVideos().subscribe());
  }

  ngOnDestroy(): void {
    this.videosSubs.unsubscribe();
  }

  trackBy(id: number, video: SearchItem) {
    return video.id;
  }
}
