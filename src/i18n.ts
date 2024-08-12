import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "./translations/en.json";

const resources = {
  en: {
    translation: tEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
