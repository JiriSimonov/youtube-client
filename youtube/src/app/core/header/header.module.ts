import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from '../material/material.module';
import { SortButtonComponent } from './components/sort-button/sort-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    FilterComponent,
    SettingsComponent,
    UserComponent,
    SortButtonComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterLink],
  exports: [HeaderComponent],
})
export class HeaderModule {}
