import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ptBR from "./locales/pt-BR.json";

function detectLanguage() {
  const language = navigator.language?.toLowerCase() ?? "en";
  return language.startsWith("pt") ? "pt-BR" : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    "pt-BR": { translation: ptBR },
  },
  lng: detectLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = i18n.language;

export default i18n;
