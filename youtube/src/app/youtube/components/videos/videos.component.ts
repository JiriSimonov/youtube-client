import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SorterService } from 'src/app/core/services/sorter.service';
import { combineLatest, Subscription, tap } from 'rxjs';
import { SortOptions } from 'src/app/shared/models/sort-options.model';
import { VideosService } from '../../../core/services/videos.service';
import { SearchItem } from '../../../core/models/search-item.models';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent implements OnInit, OnDestroy {
  public sortOptions: SortOptions | null = null;

  public videos: SearchItem[] = [];

  private subs = new Subscription();

  constructor(
    private videosService: VideosService,
    private sortService: SorterService,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.subs.add(
      combineLatest([this.sortService.sort$, this.videosService.videos$])
        .pipe(
          tap(([sort, videos]) => {
            this.sortOptions = sort;
            this.videos = videos;
            this.cdr.detectChanges();
          }),
        )
        .subscribe(),
    );
  }

  public trackBy(_: number, video: SearchItem): string {
    return video.id;
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
