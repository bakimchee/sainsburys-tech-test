import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, mode } from '../Theme';

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const activeTheme = mode[themeMode];

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      return prevState === 'light' ? 'dark' : 'light';
    });
  };

  const value = { toggleTheme, themeMode };

  return (
    <ModeContext.Provider value={value}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};
