import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AuthPageComponent
}]

@NgModule({
  declarations: [
    AuthPageComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
