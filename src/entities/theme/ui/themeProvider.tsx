import React, { useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../config/themeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProvider {
  readonly children: React.JSX.Element;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  //no useMemo, because I'm using react compiler
  const defaultValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
