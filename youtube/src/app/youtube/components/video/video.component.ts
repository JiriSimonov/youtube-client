import { Component, Input, OnInit } from '@angular/core';
import { SearchItem, Snippet, Thumbnail } from '../../../core/header/models/search.item';
import { StatisticsItemModel } from '../../models/statistics-item.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() video!: SearchItem;
  public snippet!: Snippet;
  public maxres!: Thumbnail;
  public statistics: StatisticsItemModel[] = [];

  ngOnInit(): void {
    this.snippet = this.video.snippet;
    this.maxres = this.snippet.thumbnails.medium;
    const statisticsArr = Object.values(this.video.statistics);
    const icons = ['visibility', 'thumb_up', 'thumb_down', 'favorite', 'speaker_notes'];
    icons.forEach((icon, index) => {
      this.statistics.push({ icon, count: statisticsArr[index] });
    });
  }
}
