import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription, switchMap, tap } from 'rxjs';
import { SearchItem } from 'src/app/core/models/search-item.models';
import { Snippet } from 'src/app/core/models/snippet.model';
import { Statistics } from 'src/app/core/models/statistics.models';
import { Thumbnail } from 'src/app/core/models/thumbnail.model';
import { HttpVideosService } from 'src/app/core/services/http-videos.service';

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

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef, private httpService: HttpVideosService) {}

  public ngOnInit(): void {
    this.sub.add(
      this.route.paramMap
        .pipe(
          map((paramMap) => paramMap.get('videoId') ?? ''),
          switchMap((videoIdFromRoute) =>
            this.httpService.getVideosById(videoIdFromRoute).pipe(
              tap((searchResponse) => {
                this.video = searchResponse.items.find((video) => video.id === videoIdFromRoute);
                if (this.video) {
                  ({ snippet: this.snippet, statistics: this.statistics } = this.video);
                }
                if (this.snippet) {
                  ({ maxres: this.maxres } = this.snippet.thumbnails);
                }
                this.cdr.detectChanges();
              }),
            ),
          ),
        )
        .subscribe(),
    );
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
