import React from 'react';
import { LanguageIcon } from '../icons';
import { OptionBtnS } from '../style';
import { useTranslation } from 'react-i18next';

const Language: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const switchLanguage = i18n.language === 'en' ? 'sk' : 'en';
    localStorage.setItem('lng', switchLanguage);
    i18n.changeLanguage(switchLanguage);
  };

  return (
    <OptionBtnS onClick={handleLanguageToggle}>
      <LanguageIcon />
    </OptionBtnS>
  );
};

export default Language;
