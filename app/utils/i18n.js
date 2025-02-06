import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      // This is the correct path for Next.js
      loadPath: "/locales/{{lng}}/translation.json",
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    debug: true, // Enable debug for troubleshooting
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
