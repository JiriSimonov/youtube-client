import { createReducer, on } from '@ngrx/store';
import { CardsState } from '../models/cards-state.model';
import { getCards } from './actions';

export const cardInitialState: CardsState = {
  isLoading: false,
  cards: [],
  error: null,
};

export const cardsReducers = createReducer(
  cardInitialState,
  on(getCards, (state: CardsState): CardsState => ({ ...state, isLoading: true })),
);
