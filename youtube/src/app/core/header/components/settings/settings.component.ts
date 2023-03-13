import { Component } from '@angular/core';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private videosService: VideosService) {}

  resetVideosList() {
    this.videosService.resetVideosList();
  }
}
