import { PageInfo } from './page-info.model';
import { SearchItem } from './search-item.models';

export interface Videos {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
