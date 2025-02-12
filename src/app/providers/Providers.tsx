import React from 'react';

import { ThemeProvider } from '@/entities/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

interface Providers {
  readonly children: React.JSX.Element;
}

const Providers: React.FC<Providers> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  );
};

export default Providers;
