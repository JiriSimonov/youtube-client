import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SorterService } from 'src/app/core/services/sorter.service';
import { combineLatest, Subscription, tap } from 'rxjs';
import { VideosService } from '../../../core/services/videos.service';
import { SearchItem } from '../../../core/header/models/search.item';
import { SortCriteria } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  public sort: { direction: number; criteria: SortCriteria } | null = null;

  public videos: SearchItem[] = [];

  constructor(
    private videosService: VideosService,
    private sortService: SorterService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.subs.add(
      combineLatest([this.sortService.sort$, this.videosService.videos$])
        .pipe(
          tap(([sort, videos]) => {
            this.sort = sort;
            this.videos = videos;
            this.cdr.detectChanges();
          }),
        )
        .subscribe(),
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  trackBy(_: number, video: SearchItem) {
    return video.id;
  }
}
