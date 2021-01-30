import React, { useContext } from 'react';
import { ModeContext } from '../Context/Mode';
import { TransparentButton } from './Button';

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(ModeContext);
  const handleThemeChange = () => {
    toggleTheme();
  };
  return (
    <TransparentButton onClick={handleThemeChange} type="button" transparent>
      Toggle {themeMode === 'light' ? 'dark' : 'light'} mode
    </TransparentButton>
  );
};

export default ThemeSwitcher;
