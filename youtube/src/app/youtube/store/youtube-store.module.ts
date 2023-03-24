import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { videosReducers } from './reducers';
import { VideosEffects } from './effect';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('youtube', videosReducers), EffectsModule.forFeature([VideosEffects])],
})
export class YoutubeStoreModule {}
