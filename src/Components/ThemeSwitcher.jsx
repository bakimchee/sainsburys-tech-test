import React, { useContext } from 'react';
import { ModeContext } from '../Context/Mode';
import { TransparentButton } from './Button';

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(ModeContext);
  const handleThemeChange = () => {
    toggleTheme();
  };
  const themeColor = themeMode === 'light' ? 'dark' : 'light';
  return (
    <TransparentButton onClick={handleThemeChange} type="button" transparent>
      {`Toggle ${themeColor} mode`}
    </TransparentButton>
  );
};

export default ThemeSwitcher;
