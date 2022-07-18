import React from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsTitleS, SettingsSubtitleS } from './style';

const Title: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SettingsTitleS>{t('options.title')}</SettingsTitleS>
      <SettingsSubtitleS>( {t('options.hint')} )</SettingsSubtitleS>
    </>
  );
};

export default Title;
