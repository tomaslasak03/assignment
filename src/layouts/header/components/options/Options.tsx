import React from 'react';
import { OptionsS } from './style';
import { Language, Theme, Settings } from './buttons';

const Options: React.FC = () => {
  return (
    <OptionsS>
      <Language />
      <Theme />
      <Settings />
    </OptionsS>
  );
};

export default Options;
