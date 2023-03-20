import { ResponseId } from './response-id.model';

export interface ResponseItem {
  etag: string;
  id: ResponseId;
  kind: string;
}
