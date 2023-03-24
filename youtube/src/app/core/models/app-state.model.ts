import { VideosState } from 'src/app/youtube/store/models/videos-state.model';
import { CardsState } from './cards-state.model';

export interface AppState {
  videos: VideosState;
}
