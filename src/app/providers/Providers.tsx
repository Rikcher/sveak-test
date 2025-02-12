import React from 'react';

import { ThemeProvider } from '@/entities/theme';

interface Providers {
  readonly children: React.JSX.Element;
}

const Providers: React.FC<Providers> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
