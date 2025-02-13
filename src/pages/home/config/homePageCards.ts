import { CardType } from '@/entities/card';

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

const cardsAmount = 71;

const getRandomCards = (source: CardType[], amount: number): CardType[] => {
  const randomCards: CardType[] = [];
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * source.length);
    randomCards.push(source[randomIndex]);
  }
  return randomCards;
};

export const HOME_PAGE_CARDS: CardType[] = getRandomCards(
  defaultTextCards,
  cardsAmount
);
