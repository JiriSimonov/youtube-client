import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MaterialModule } from '../core/material/material.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [AuthPageComponent, SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, MaterialModule],
})
export class AuthModule {}
