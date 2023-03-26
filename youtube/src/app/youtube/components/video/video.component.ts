import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/core/models/search-item.models';
import { Snippet } from 'src/app/core/models/snippet.model';
import { Statistics } from 'src/app/core/models/statistics.models';
import { Thumbnail } from 'src/app/core/models/thumbnail.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() public video!: SearchItem;

  public snippet!: Snippet;
  public maxres!: Thumbnail;
  public statistics!: Statistics;

  public ngOnInit(): void {
    this.snippet = this.video.snippet;
    this.maxres = this.snippet.thumbnails.medium;
    this.statistics = this.video.statistics;
  }
}
