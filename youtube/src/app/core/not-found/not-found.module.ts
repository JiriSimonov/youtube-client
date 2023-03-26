import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NotFoundModule {}
