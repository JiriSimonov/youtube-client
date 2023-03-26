import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CARDS_FEATURE_NAME } from 'src/app/shared/constans/states-name';
import { CardsState } from '../models/cards-state.model';

export const selectCardsFeature = createFeatureSelector<CardsState>(CARDS_FEATURE_NAME);
export const selectIsCardsLoading = createSelector(selectCardsFeature, (cardsState) => cardsState.isLoading);
export const selectCards = createSelector(selectCardsFeature, (cardsState) => cardsState.cards);
