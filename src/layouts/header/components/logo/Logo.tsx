import React from 'react';
import LogoSpaceX from '@assets/logo';
import { LogoBoxS } from '../../style';

const Logo: React.FC = () => {
  return (
    <LogoBoxS href='/'>
      <LogoSpaceX />
    </LogoBoxS>
  );
};

export default Logo;
