import { createReducer, on } from '@ngrx/store';
import { VideosState } from './models/videos-state.model';
import { getVideos, getVideosFailure, getVideosSuccess } from './actions';

export const videosInitialState: VideosState = {
  isLoading: false,
  videos: [],
  error: null,
};

export const videosReducers = createReducer(
  videosInitialState,
  on(getVideos, (state): VideosState => ({ ...state, isLoading: true })),
  on(getVideosSuccess, (state, action): VideosState => ({ ...state, isLoading: false, videos: action.videos.items })),
  on(getVideosFailure, (state, action): VideosState => ({ ...state, isLoading: false, error: action.error })),
);
