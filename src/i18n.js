import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
import BackendAdapter from 'i18next-multiload-backend-adapter';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import { Http } from '@mui/icons-material';

i18n
  .use(BackendAdapter)
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ['bg', 'en', 'rs'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      backend: Http,
      backendOption: {
        loadPath: './locales/{{lng}}/translation.json',
      },
    },
  });

export default i18n;
