import React from 'react';
import { OptionsS, FakeSetting } from './style';
import { Language, Theme } from './buttons';
import Settings from '@components/settings';

const Options: React.FC = () => {
  return (
    <OptionsS>
      <Language />
      <Theme />
      <FakeSetting />
      <Settings />
    </OptionsS>
  );
};

export default Options;
