import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en.json";

const resources = {
  en: { translation: translationEn },
};

const fallbackLng = "en";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
