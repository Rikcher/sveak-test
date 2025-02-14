import { CardType, getRandomCards } from '@/entities/card';

const defaultTextCards: CardType[] = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  { text: 'Hello world' },
];

const cardsAmount = 35;

export const HOME_PAGE_CARDS: CardType[] = getRandomCards(
  defaultTextCards,
  cardsAmount
);
