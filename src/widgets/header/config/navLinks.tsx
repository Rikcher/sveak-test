import React from 'react';
import { Image, LetterText } from 'lucide-react';

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
    label: 'pictures page',
    url: '/pictures',
    icon: <Image />,
  },
];
