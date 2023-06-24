import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: [
        "path",
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: { loadPath: "assets/locales/{{lng}}/translation.json" },
  });

export default i18n;
