import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  I18nManager,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppLanguage, setLanguage } from "../../lang/i18n";
import { useAppDirection } from "../hooks/use-app-direction";

const logoGlow = require("../../assets/images/logo-glow.png");
const pregnantWoman = require("../../assets/images/pregnantwoman.png");

const languages: { code: AppLanguage; label: string; nativeLabel: string }[] = [
  { code: "fr", label: "Français", nativeLabel: "FR" },
  { code: "ar", label: "العربية", nativeLabel: "AR" },
];

export default function LanguageSelection() {
  const { t, i18n } = useTranslation();
  const [isSaving, setIsSaving] = useState(false);
  const { isRTL, row: rowDirection, text: direction } = useAppDirection();

  const selectLanguage = (language: AppLanguage) => {
    setIsSaving(true);
    void setLanguage(language)
      .then(() => I18nManager.allowRTL(language === "ar"))
      .catch(() => undefined);
    router.replace("/(auth)/sign-in");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={logoGlow} style={styles.topGlow} />
      <View style={styles.orbOne} />
      <View style={styles.orbTwo} />

      <View style={styles.content}>
        <View style={styles.illustration}>
          <View style={styles.sun} />
          <Image
            source={pregnantWoman}
            resizeMode="contain"
            style={styles.pregnantWoman}
          />
          <View style={styles.sparkleTop}>
            <Text style={styles.sparkleText}>✦</Text>
          </View>
          <View style={styles.sparkleBottom}>
            <Text style={styles.sparkleSmall}>✦</Text>
          </View>
          <Text style={styles.illustrationCaption}>WILADATI</Text>
        </View>

        <View style={styles.copy}>
          <Text style={[styles.title, direction]}>
            {t("languageSelectionTitle")}
          </Text>
          <Text style={[styles.subtitle, direction]}>
            {t("languageSelectionSubtitle")}
          </Text>
        </View>

        <View style={styles.languageList}>
          {languages.map((language) => (
            <Pressable
              key={language.code}
              accessibilityRole="button"
              accessibilityLabel={language.label}
              disabled={isSaving}
              onPress={() => selectLanguage(language.code)}
              style={({ pressed }) => [
                styles.languageButton,
                language.code === i18n.language
                  ? styles.selectedButton
                  : undefined,
                rowDirection,
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[
                  styles.languageBadge,
                  language.code === "ar"
                    ? styles.arabicBadge
                    : styles.frenchBadge,
                ]}
              >
                <Text style={styles.badgeText}>{language.nativeLabel}</Text>
              </View>
              <View style={styles.languageText}>
                <Text style={[styles.languageName, direction]}>
                  {language.label}
                </Text>
                <Text style={[styles.languageHint, direction]}>
                  {language.code === "ar" ? "العربية" : "Langue française"}
                </Text>
              </View>
              <Text style={[styles.arrow, direction]}>{isRTL ? "‹" : "›"}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8F6FF", overflow: "hidden" },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  topGlow: {
    position: "absolute",
    width: 330,
    height: 330,
    top: -165,
    right: -90,
    opacity: 0.16,
  },
  orbOne: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#E7D6FF",
    bottom: 92,
    left: -88,
    opacity: 0.5,
  },
  orbTwo: {
    position: "absolute",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#F9DDB4",
    top: 185,
    right: -24,
    opacity: 0.65,
  },
  illustration: {
    height: 292,
    marginTop: 8,
    borderRadius: 38,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDE5FF",
    borderWidth: 1,
    borderColor: "#E0D1FF",
  },
  sun: {
    position: "absolute",
    width: 290,
    height: 290,
    borderRadius: 145,
    backgroundColor: "#D8C2FF",
    bottom: -132,
  },
  pregnantWoman: {
    width: 288,
    height: 288,
    marginTop: 13,
    tintColor: "#57339B",
  },
  sparkleTop: { position: "absolute", top: 35, left: "22%" },
  sparkleBottom: { position: "absolute", bottom: 45, right: "18%" },
  sparkleText: { color: "#B26A20", fontSize: 28 },
  sparkleSmall: { color: "#8D65D1", fontSize: 18 },
  illustrationCaption: {
    position: "absolute",
    bottom: 20,
    color: "#4F2B8A",
    fontSize: 15,
    fontFamily: "sans-extrabold",
    letterSpacing: 4,
  },
  copy: { marginTop: 18 },
  title: {
    color: "#210255",
    fontSize: 29,
    lineHeight: 36,
    fontFamily: "sans-extrabold",
  },
  subtitle: {
    marginTop: 8,
    maxWidth: 330,
    color: "#6E6480",
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "sans-regular",
  },
  languageList: { gap: 12, marginTop: 14 },
  languageButton: {
    minHeight: 74,
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E4DDF0",
    backgroundColor: "#FFFFFF",
    shadowColor: "#210255",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  selectedButton: { borderColor: "#A688E0", backgroundColor: "#FBF9FF" },
  pressed: { opacity: 0.72, transform: [{ scale: 0.985 }] },
  languageBadge: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  frenchBadge: { backgroundColor: "#E7EEFF" },
  arabicBadge: { backgroundColor: "#FBE4C9" },
  badgeText: { color: "#210255", fontSize: 13, fontFamily: "sans-extrabold" },
  languageText: { flex: 1, marginHorizontal: 13 },
  languageName: { color: "#211934", fontSize: 17, fontFamily: "sans-bold" },
  languageHint: {
    marginTop: 2,
    color: "#827A8F",
    fontSize: 12,
    fontFamily: "sans-regular",
  },
  arrow: {
    color: "#8262B8",
    fontSize: 31,
    lineHeight: 33,
    fontFamily: "sans-light",
  },
});
