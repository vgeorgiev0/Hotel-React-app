import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'bg', 'rs'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: './locales/{{lng}}/translation.json',
    },
  });

export default i18n;
