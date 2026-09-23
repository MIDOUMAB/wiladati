import { useAppDirection } from "./use-app-direction";

/** Compatibility hook for legacy subject pages using pr-* / pl-* padding. */
export function useLanguage() {
  const direction = useAppDirection();
  return { ...direction, languageData: direction.isRTL ? "ar" : "fr" };
}
