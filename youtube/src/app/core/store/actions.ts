import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/admin/models/custom-card.model';

export const getCards = createAction('[Cards] get cards');
export const getCardsSuccess = createAction('[Cards] get cards success', props<{ cards: CustomCard[] }>());
export const getCardsFailure = createAction('[Cards] get cards failure', props<{ error: string }>());
export const setCard = createAction('[Cards] set card', props<{ card: CustomCard }>());
export const setCardSuccess = createAction('[Cards] set card success', props<{ card: CustomCard }>());
