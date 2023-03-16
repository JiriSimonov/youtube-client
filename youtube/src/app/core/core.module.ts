import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { MaterialModule } from './material/material.module';
import { StorageModule } from './storage/storage.module';

@NgModule({
  imports: [CommonModule, HeaderModule, MaterialModule, StorageModule.forRoot({ config: { prefix: 'JIRI' } })],
  exports: [HeaderModule, MaterialModule, StorageModule],
})
export class CoreModule {}
