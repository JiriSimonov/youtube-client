import { createReducer as videos, on } from '@ngrx/store';
import { VideosState } from '../models/videos-state.model';
import { getVideos, getVideosFailure, getVideosSuccess } from './actions';

export const videosInitialState: VideosState = {
  isLoading: false,
  videos: [],
  error: null,
};

export const videosReducers = videos(
  videosInitialState,
  on(getVideos, (state: VideosState): VideosState => ({ ...state, isLoading: true })),
  on(getVideosSuccess, (state, action) => ({ ...state, isLoading: false, videos: action.videos.items })),
  on(getVideosFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
);
