import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YOUTUBE_FEATURE_NAME } from 'src/app/shared/constans/states-name';
import { VideosState } from './models/videos-state.model';

const selectVideosFeature = createFeatureSelector<VideosState>(YOUTUBE_FEATURE_NAME);
export const selectIsVideosLoading = createSelector(selectVideosFeature, (videosState) => videosState.isLoading);
export const selectVideos = createSelector(selectVideosFeature, (videosState) => videosState.videos);
export const selectError = createSelector(selectVideosFeature, (videosState) => videosState.error);
