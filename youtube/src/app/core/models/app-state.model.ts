import { VideosState } from 'src/app/youtube/store/models/videos-state.model';
import { CardsState } from './cards-state.model';

export interface AppState {
  cards: CardsState;
  videos: VideosState;
}
