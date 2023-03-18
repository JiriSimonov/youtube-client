import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../../core/models/search-item.models';
import { Snippet } from '../../../core/models/snippet.model';
import { Thumbnail } from '../../../core/models/thumbnail.model';
import { Statistics } from '../../../core/models/statistics.models';

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
