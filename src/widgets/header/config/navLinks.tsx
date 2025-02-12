import React from 'react';
import { Image, LetterText, SquareUser } from 'lucide-react';

export type Link = {
  id: string;
  label: string;
  url: string;
  icon: React.JSX.Element;
};

export const LINKS: Link[] = [
  { id: '1', label: 'text page', url: '/', icon: <LetterText /> },
  { id: '2', label: 'images page', url: '/images', icon: <Image /> },
  { id: '3', label: 'users page', url: '/users', icon: <SquareUser /> },
];
