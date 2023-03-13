import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CommonModule, HeaderModule, MaterialModule],
  exports: [HeaderModule, MaterialModule],
})
export class CoreModule {}
