import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsItemModel } from 'src/app/youtube/models/statistics-item.model';
import { MaterialModule } from 'src/app/core/material/material.module';
import { Statistics } from 'src/app/core/models/statistics.models';

@Component({
  selector: 'app-video-statistics',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoStatisticsComponent implements OnInit {
  @Input('app-video-statistics') public statistics!: Statistics;

  public stats: StatisticsItemModel[] = [];
  private icons = ['visibility', 'thumb_up'];

  public ngOnInit(): void {
    this.stats = Object.values(this.statistics)
      .filter((_, i) => i < 2)
      .map((stat, i) => ({ icon: this.icons[i], count: stat }));
  }
}
