import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { videosReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { VideosEffects } from './store/effect';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('youtube', videosReducers), EffectsModule.forFeature([VideosEffects])],
})
export class ReduxModule {}
