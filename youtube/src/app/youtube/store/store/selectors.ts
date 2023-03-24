import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import { VideosState } from '../models/videos-state.model';

export const selectVideosFeature = (state: AppState): VideosState => state.videos;
export const selectIsVideosLoading = createSelector(
  selectVideosFeature,
  (videosState: VideosState): boolean => videosState.isLoading,
);
export const selectVideos = createSelector(selectVideosFeature, (videosState) => videosState.videos);
export const selectError = createSelector(selectVideosFeature, (videosState) => videosState.error);
