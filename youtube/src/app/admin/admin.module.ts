import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { MaterialModule } from '../core/material/material.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminPageComponent,
  },
];

@NgModule({
  declarations: [AdminPageComponent, CreateCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, ReactiveFormsModule],
})
export class AdminModule {}
