import { Snippet } from './snippet.model';
import { Statistics } from './statistics.models';

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
