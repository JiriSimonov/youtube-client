import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { SearchComponent } from './layout/header/components/search/search.component'
import { ProfileComponent } from './layout/header/components/profile/profile.component'
import { SortComponent } from './layout/header/components/sort/sort.component'
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SearchComponent,
    ProfileComponent,
    SortComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, SearchComponent],
})
export class SharedModule {}
