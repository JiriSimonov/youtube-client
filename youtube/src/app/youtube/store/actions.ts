import { createAction, props } from '@ngrx/store';
import { Videos } from 'src/app/core/models/videos.model';

export const getVideos = createAction('[Videos] Get Videos', props<{ search: string }>());
export const getVideosSuccess = createAction('[Videos] Get Videos success', props<{ videos: Videos }>());
export const getVideosFailure = createAction('[Videos] Get Videos failure', props<{ error: string }>());
