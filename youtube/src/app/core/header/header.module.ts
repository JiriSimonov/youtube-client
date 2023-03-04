import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderPageComponent],
  imports: [CommonModule, RouterLink],
  exports: [HeaderPageComponent],
})
export class HeaderModule {}
