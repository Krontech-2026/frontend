import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from '../public/locales/de/translation.json';
import en from '../public/locales/en/translation.json';
import es from '../public/locales/es/translation.json';
import fr from '../public/locales/fr/translation.json';
import ro from '../public/locales/ro/translation.json';

const resources = {
  de: { translation: de },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  ro: { translation: ro },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      supportedLngs: Object.keys(resources),
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
