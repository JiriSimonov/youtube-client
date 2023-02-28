import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: YoutubePageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
