import { CardType } from '../model/types';

export const getRandomCards = (
  source: CardType[],
  amount: number
): CardType[] => {
  const randomCards: CardType[] = [];
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * source.length);
    randomCards.push(source[randomIndex]);
  }
  return randomCards;
};
