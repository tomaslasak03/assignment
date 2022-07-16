import React from 'react';
import { TitleS } from './style';
import { useTranslation } from 'react-i18next';

const Title: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TitleS>
      <h1>{t('title')}</h1>
    </TitleS>
  );
};

export default Title;
