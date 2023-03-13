import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from '../header/components/search-results/search-results.component';
import { SearchItemComponent } from '../header/components/search-item/search-item.component';

@NgModule({
  declarations: [SearchResultsComponent, SearchItemComponent],
  imports: [CommonModule],
})
export class SearchModule {}
