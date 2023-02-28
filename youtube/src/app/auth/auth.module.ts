import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthPageComponent } from './pages/auth-page/auth-page.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [AuthPageComponent, SignInComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
