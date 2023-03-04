import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: YoutubePageComponent,
  },
];

@NgModule({
  declarations: [YoutubePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class YoutubeModule {}
