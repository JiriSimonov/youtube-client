import { CustomCard } from 'src/app/admin/models/custom-card.model';

export interface CardsState {
  isLoading: boolean;
  cards: CustomCard[];
  error: string | null;
}
