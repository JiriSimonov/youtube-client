import { createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state.model';

export const selectCardsFeature = (state: AppState) => state.cards;
export const isCardsLoadingSelector = createSelector(selectCardsFeature, (state) => state.isLoading);
