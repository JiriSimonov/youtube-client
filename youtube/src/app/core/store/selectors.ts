import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../models/cards-state.model';

export const selectCardsFeature = createFeatureSelector<CardsState>('cards');
export const selectIsCardsLoading = createSelector(selectCardsFeature, (cardsState) => cardsState.isLoading);
export const selectCards = createSelector(selectCardsFeature, (cardsState) => cardsState.cards);
