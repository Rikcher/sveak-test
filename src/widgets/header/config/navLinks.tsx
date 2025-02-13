import React from 'react';
import { Image, LetterText, SquareUser } from 'lucide-react';

export type Link = {
  id: string;
  label: string;
  url: string;
  icon: React.JSX.Element;
};

export const LINKS: Link[] = [
  {
    id: 'header-nav-link-1',
    label: 'text page',
    url: '/',
    icon: <LetterText />,
  },
  {
    id: 'header-nav-link-2',
    label: 'images page',
    url: '/images',
    icon: <Image />,
  },
  {
    id: 'header-nav-link-3',
    label: 'users page',
    url: '/users',
    icon: <SquareUser />,
  },
];
