import { useTranslation } from "react-i18next";
import { TextStyle, ViewStyle } from "react-native";

/**
 * Keeps the visual direction tied to the selected app language.
 * It is derived during render, so it has no asynchronous work or storage access.
 */
export function useAppDirection() {
  const { i18n } = useTranslation();
  const isRTL =
    i18n.resolvedLanguage?.startsWith("ar") ?? i18n.language.startsWith("ar");

  const text: TextStyle = {
    textAlign: isRTL ? "right" : "left",
    writingDirection: isRTL ? "rtl" : "ltr",
  };

  const row: ViewStyle = { flexDirection: isRTL ? "row-reverse" : "row" };

  return { isRTL, text, row };
}
