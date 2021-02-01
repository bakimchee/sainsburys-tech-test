import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { mode } from '../Theme';

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const activeTheme = mode[themeMode];

  const toggleTheme = () => {
    setThemeMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const value = { toggleTheme, themeMode };

  return (
    <ModeContext.Provider value={value}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

ModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
