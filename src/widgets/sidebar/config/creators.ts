import { Creator } from '@/entities/creator';

const defaultCreators: Creator[] = [
  {
    id: 'creator-1',
    imageUrl: 'https://avatar.iran.liara.run/public/62',
    name: 'Jane Doe',
  },
  {
    id: 'creator-2',
    imageUrl: 'https://avatar.iran.liara.run/public/73',
    name: 'Emily Carter',
  },
  {
    id: 'creator-3',
    imageUrl: 'https://avatar.iran.liara.run/public/59',
    name: 'Sofia Smith',
  },
  {
    id: 'creator-4',
    imageUrl: 'https://avatar.iran.liara.run/public/20',
    name: 'John Doe',
  },
  {
    id: 'creator-5',
    imageUrl: 'https://avatar.iran.liara.run/public/31',
    name: 'Richard Roe',
  },
  {
    id: 'creator-6',
    imageUrl: 'https://avatar.iran.liara.run/public/43',
    name: 'John Smith',
  },
];

const shuffleArray = <T>(array: T[]): T[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const multiplyCreators = (
  creators: Creator[],
  multiplier: number
): Creator[] => {
  const multipliedCreators: Creator[] = [];

  for (let i = 1; i <= multiplier; i++) {
    creators.forEach((creator) => {
      const newCreator: Creator = {
        ...creator,
        id: `${creator.id}-${i}`,
      };
      multipliedCreators.push(newCreator);
    });
  }

  return shuffleArray(multipliedCreators);
};

const multiplier = 3;

export const CREATORS: Creator[] = multiplyCreators(
  defaultCreators,
  multiplier
);
