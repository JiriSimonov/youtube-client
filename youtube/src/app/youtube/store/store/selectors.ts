import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideosState } from '../models/videos-state.model';

const getVideosFeature = createFeatureSelector<VideosState>('youtube');
export const selectIsVideosLoading = createSelector(
  getVideosFeature,
  (videosState: VideosState): boolean => videosState.isLoading,
);
export const selectVideos = createSelector(getVideosFeature, (videosState) => videosState.videos);
export const selectError = createSelector(getVideosFeature, (videosState) => videosState.error);
