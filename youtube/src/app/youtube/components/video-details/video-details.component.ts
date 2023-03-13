import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription, switchMap, tap } from 'rxjs';
import { SearchItem, Snippet, Statistics, Thumbnail } from 'src/app/core/header/models/search.item';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  public video!: SearchItem | undefined;

  public snippet!: Snippet | undefined;

  public statistics!: Statistics | undefined;

  public maxres!: Thumbnail | undefined;

  private sub = new Subscription();

  constructor(private route: ActivatedRoute, private videosService: VideosService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sub.add(
      this.route.paramMap
        .pipe(
          map((paramMap) => paramMap.get('videoId')),
          switchMap((videoIdFromRoute) =>
            this.videosService.getVideos().pipe(
            tap((res) => {
              this.video = res.items.find((video) => video.id === videoIdFromRoute);
              this.snippet = this.video?.snippet;
              this.statistics = this.video?.statistics;
              this.maxres = this.snippet?.thumbnails.maxres;
              this.cdr.detectChanges();
            }),
          ),
          ),
        )
        .subscribe(),
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
