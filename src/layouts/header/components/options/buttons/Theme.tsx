import React from 'react';
import { MoonIcon, SunIcon } from '../icons';
import { OptionBtnS } from '../style';
import { themeStore } from '@store';

const Theme: React.FC = () => {
  const { theme } = themeStore((s) => s);
  return (
    <OptionBtnS
      onClick={() => (
        themeStore.getState().toggleTheme(),
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
      )}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </OptionBtnS>
  );
};

export default Theme;
