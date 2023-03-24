import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideosState } from './models/videos-state.model';

const selectVideosFeature = createFeatureSelector<VideosState>('youtube');
export const selectIsVideosLoading = createSelector(selectVideosFeature, (videosState) => videosState.isLoading);
export const selectVideos = createSelector(selectVideosFeature, (videosState) => videosState.videos);
export const selectError = createSelector(selectVideosFeature, (videosState) => videosState.error);
