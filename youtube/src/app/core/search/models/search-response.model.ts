import { SearchItemModel } from './search-item.model';

export interface SearchResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: SearchItemModel[];
}

export interface PageInfoModel {
  totalResults: number;
  resultsPerPage: number;
}
