import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
})
export class MaterialModule {}
