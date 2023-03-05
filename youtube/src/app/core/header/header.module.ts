import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './pages/header-page/header-page.component';

@NgModule({
  declarations: [HeaderPageComponent],
  imports: [CommonModule],
  exports: [HeaderPageComponent],
})
export class HeaderModule {}
