import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./ar.json";
import fr from "./fr.json";

export const LANGUAGE_STORAGE_KEY = "wiladati.language";
export const supportedLanguages = ["fr", "ar"] as const;
export type AppLanguage = (typeof supportedLanguages)[number];

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources: {
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export async function setLanguage(language: AppLanguage) {
  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  await i18n.changeLanguage(language);
}

export async function loadSavedLanguage() {
  const language = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (language && supportedLanguages.includes(language as AppLanguage)) {
    await i18n.changeLanguage(language);
  }
}

export default i18n;
