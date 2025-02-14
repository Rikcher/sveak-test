import { CardType, getRandomCards } from '@/entities/card';

const defaultPicturesCards: CardType[] = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1727200451475-41a3450c8212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1727239259721-a3bf84eb4dda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1727086758481-ed433209dc09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1729577662883-d4095974d4bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fHw%3D',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1729560385431-645049bf5821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fHw%3D',
  },
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1669495126753-d943195037a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjd8fHxlbnwwfHx8fHw%3D',
  },
];

const cardsAmount = 75;

export const PICTURES_PAGE_CARDS: CardType[] = getRandomCards(
  defaultPicturesCards,
  cardsAmount
);
