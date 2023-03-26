import { SearchItem } from 'src/app/core/models/search-item.models';

export interface VideosState {
  isLoading: boolean;
  videos: SearchItem[];
  error: string | null;
}
