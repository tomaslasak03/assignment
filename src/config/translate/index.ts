import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import sk from './sk.json';
import en from './en.json';

const resources = {
  en: {
    translation: en,
  },
  sk: {
    translation: sk,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') || 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
