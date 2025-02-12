import { useContext } from 'react';

import { ThemeContext } from '../config/themeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context || !context.setTheme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
