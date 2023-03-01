import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthPageComponent } from './pages/auth-page/auth-page.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { AuthRoutingModule } from './auth-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material/material.module'

@NgModule({
  declarations: [AuthPageComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
