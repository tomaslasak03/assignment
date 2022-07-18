import React from 'react';
import Title from './Title';
import Drag from './Drag';
import { SettingsBoxS } from './style';

const Settings: React.FC = () => {
  return (
    <SettingsBoxS>
      <Title />
      <Drag />
    </SettingsBoxS>
  );
};

export default Settings;
