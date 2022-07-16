import React from 'react';
import { HeaderS } from './style';
import { Logo, Options } from './components';

const Header: React.FC = () => {
  return (
    <HeaderS>
      <Logo />
      <Options />
    </HeaderS>
  );
};

export default Header;
