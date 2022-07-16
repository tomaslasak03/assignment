import React from 'react';
import { themeStore } from '@store';
import { darkTheme, lightTheme } from './index';

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { theme } = themeStore((s) => s);

  return <div className={theme === 'light' ? lightTheme : darkTheme}>{children}</div>;
};

export default ThemeProvider;
