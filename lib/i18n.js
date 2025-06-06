import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../ locales/en/common.json';
import pt from '../ locales/pt/common.json';

if (typeof window !== 'undefined' && !i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      resources: {
        en: { translation: en },
        pt: { translation: pt },
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
