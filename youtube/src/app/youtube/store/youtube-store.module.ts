import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { videosReducers } from './reducers';
import { VideosEffects } from './effect';
import { YOUTUBE_FEATURE_NAME } from 'src/app/shared/constans/states-name';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(YOUTUBE_FEATURE_NAME, videosReducers),
    EffectsModule.forFeature([VideosEffects]),
  ],
})
export class YoutubeStoreModule {}
