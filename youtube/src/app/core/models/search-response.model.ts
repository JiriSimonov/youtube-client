import { PageInfo } from './page-info.model';
import { ResponseItem } from './response-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}
