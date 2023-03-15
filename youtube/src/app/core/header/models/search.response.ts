import { SearchItem } from './search.item';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}

export interface Videos {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}

export interface ResponseItem {
  etag: string;
  id: ResponseId;
  kind: string;
}

interface ResponseId {
  kind: string;
  videoId: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
