import { createReducer, on } from '@ngrx/store';
import { CardsState } from '../models/cards-state.model';
import { getCards, getCardsFailure, getCardsSuccess, setCard } from './actions';

export const cardsInitialState: CardsState = {
  isLoading: false,
  cards: [],
  error: null,
};

export const cardsReducers = createReducer(
  cardsInitialState,
  on(getCards, (state): CardsState => ({ ...state, isLoading: true })),
  on(getCardsSuccess, (state, action): CardsState => ({ ...state, isLoading: false, cards: action.cards })),
  on(getCardsFailure, (state, action): CardsState => ({ ...state, isLoading: false, error: action.error })),
  on(setCard, (state, action): CardsState => ({ ...state, cards: [...state.cards, action.card] })),
);
