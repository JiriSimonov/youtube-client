import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsItemModel } from 'src/app/youtube/models/statistics-item.model';
import { Statistics } from 'src/app/core/header/models/search.item';
import { MaterialModule } from 'src/app/core/material/material.module';

@Component({
  selector: 'app-video-statistics',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent implements OnInit {
  @Input('app-video-statistics') public statistics!: Statistics;

  public stats: StatisticsItemModel[] = [];

  private icons = ['visibility', 'thumb_up', 'thumb_down', 'favorite', 'speaker_notes'];

  public ngOnInit(): void {
    this.stats = Object.values(this.statistics).map((stat, i) => ({ icon: this.icons[i], count: stat }));
    this.stats.splice(3, 1);
  }
}
