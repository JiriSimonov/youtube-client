import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderPageComponent, SearchFormComponent, FilterComponent, SettingsComponent, UserComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [HeaderPageComponent],
})
export class HeaderModule {}
