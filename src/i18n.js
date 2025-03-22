import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../public/locales/ru/translation.json";
import ru from "../public/locales/kg/translation.json";
import kg from "../public/locales/en/translation.json";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  kg: {
    translation: kg,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "ru", "kg"],
    fallbackLng: "en",
    lng: "kg",
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
