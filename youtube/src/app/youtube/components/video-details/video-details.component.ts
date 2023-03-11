import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { SearchItem, Snippet } from 'src/app/core/header/models/search.item';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  public video!: SearchItem | undefined;
  public snippet!: Snippet | undefined;

  constructor(private route: ActivatedRoute, private videosService: VideosService) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const videoIdFromRoute = routeParams.get('videoId');
    this.videosService
      .getVideos()
      .pipe(
        tap((res) => {
          this.video = res.items.find((video) => video.id === videoIdFromRoute);
          this.snippet = this.video?.snippet;
        }),
      )
      .subscribe();
  }
}
