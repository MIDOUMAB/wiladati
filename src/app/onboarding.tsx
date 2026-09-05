import { router } from "expo-router";
import { useState } from "react";
import {
  I18nManager,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import { AppLanguage, setLanguage } from "../../lang/i18n";

const logoGlow = require("../../assets/images/logo-glow.png");

const languages: { code: AppLanguage; label: string; nativeLabel: string }[] = [
  { code: "fr", label: "Français", nativeLabel: "FR" },
  { code: "ar", label: "العربية", nativeLabel: "AR" },
];

export default function LanguageSelection() {
  const { t, i18n } = useTranslation();
  const [isSaving, setIsSaving] = useState(false);
  const isArabic = i18n.language.startsWith("ar");
  const direction = isArabic ? styles.rtl : styles.ltr;
  const rowDirection = isArabic ? styles.rowRtl : styles.rowLtr;

  const selectLanguage = async (language: AppLanguage) => {
    setIsSaving(true);
    await setLanguage(language);
    I18nManager.allowRTL(language === "ar");
    I18nManager.forceRTL(language === "ar");
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={logoGlow} style={styles.topGlow} />
      <View style={styles.orbOne} />
      <View style={styles.orbTwo} />

      <View style={styles.content}>
        <View style={[styles.brandRow, rowDirection]}>
          <View style={styles.brandMark}><Text style={styles.brandMarkText}>W</Text></View>
          <Text style={[styles.brandName, direction]}>{t("appName")}</Text>
        </View>

        <View style={styles.illustration}>
          <View style={styles.sun} />
          <View style={styles.moon}><Text style={styles.moonText}>♡</Text></View>
          <View style={styles.sparkleTop}><Text style={styles.sparkleText}>✦</Text></View>
          <View style={styles.sparkleBottom}><Text style={styles.sparkleSmall}>✦</Text></View>
          <Text style={styles.illustrationCaption}>—  M A T E R N I T É  —</Text>
        </View>

        <View style={styles.copy}>
          <Text style={[styles.title, direction]}>{t("languageSelectionTitle")}</Text>
          <Text style={[styles.subtitle, direction]}>{t("languageSelectionSubtitle")}</Text>
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
                language.code === i18n.language ? styles.selectedButton : undefined,
                rowDirection,
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.languageBadge, language.code === "ar" ? styles.arabicBadge : styles.frenchBadge]}>
                <Text style={styles.badgeText}>{language.nativeLabel}</Text>
              </View>
              <View style={styles.languageText}>
                <Text style={[styles.languageName, direction]}>{language.label}</Text>
                <Text style={[styles.languageHint, direction]}>{language.code === "ar" ? "العربية" : "Langue française"}</Text>
              </View>
              <Text style={[styles.arrow, direction]}>{isArabic ? "‹" : "›"}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8F6FF", overflow: "hidden" },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 12, paddingBottom: 24, justifyContent: "space-between" },
  topGlow: { position: "absolute", width: 330, height: 330, top: -165, right: -90, opacity: 0.16 },
  orbOne: { position: "absolute", width: 160, height: 160, borderRadius: 80, backgroundColor: "#E7D6FF", bottom: 92, left: -88, opacity: 0.5 },
  orbTwo: { position: "absolute", width: 72, height: 72, borderRadius: 36, backgroundColor: "#F9DDB4", top: 185, right: -24, opacity: 0.65 },
  brandRow: { alignItems: "center", gap: 10 },
  rowLtr: { flexDirection: "row" },
  rowRtl: { flexDirection: "row-reverse" },
  brandMark: { width: 38, height: 38, borderRadius: 19, alignItems: "center", justifyContent: "center", backgroundColor: "#210255", shadowColor: "#210255", shadowOpacity: 0.18, shadowRadius: 10, elevation: 4 },
  brandMarkText: { color: "#FFFFFF", fontSize: 18, fontFamily: "sans-extrabold" },
  brandName: { color: "#210255", fontSize: 23, fontFamily: "sans-extrabold", letterSpacing: 0.3 },
  illustration: { height: 186, marginTop: 8, borderRadius: 34, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: "#EDE5FF", borderWidth: 1, borderColor: "#E0D1FF" },
  sun: { position: "absolute", width: 190, height: 190, borderRadius: 95, backgroundColor: "#D8C2FF", bottom: -84 },
  moon: { width: 104, height: 104, borderRadius: 52, alignItems: "center", justifyContent: "center", backgroundColor: "#6940B8", shadowColor: "#4A218F", shadowOpacity: 0.25, shadowRadius: 14, elevation: 7 },
  moonText: { color: "#FFFFFF", fontSize: 64, fontFamily: "sans-light", marginTop: -6 },
  sparkleTop: { position: "absolute", top: 25, left: "27%" },
  sparkleBottom: { position: "absolute", bottom: 35, right: "23%" },
  sparkleText: { color: "#B26A20", fontSize: 28 },
  sparkleSmall: { color: "#8D65D1", fontSize: 18 },
  illustrationCaption: { position: "absolute", bottom: 17, color: "#6D5194", fontSize: 9, fontFamily: "sans-bold", letterSpacing: 2.3 },
  copy: { marginTop: 18 },
  title: { color: "#210255", fontSize: 29, lineHeight: 36, fontFamily: "sans-extrabold" },
  subtitle: { marginTop: 8, maxWidth: 330, color: "#6E6480", fontSize: 15, lineHeight: 22, fontFamily: "sans-regular" },
  languageList: { gap: 12, marginTop: 14 },
  languageButton: { minHeight: 74, alignItems: "center", paddingHorizontal: 16, borderRadius: 22, borderWidth: 1, borderColor: "#E4DDF0", backgroundColor: "#FFFFFF", shadowColor: "#210255", shadowOpacity: 0.06, shadowRadius: 10, elevation: 2 },
  selectedButton: { borderColor: "#A688E0", backgroundColor: "#FBF9FF" },
  pressed: { opacity: 0.72, transform: [{ scale: 0.985 }] },
  languageBadge: { width: 42, height: 42, alignItems: "center", justifyContent: "center", borderRadius: 14 },
  frenchBadge: { backgroundColor: "#E7EEFF" },
  arabicBadge: { backgroundColor: "#FBE4C9" },
  badgeText: { color: "#210255", fontSize: 13, fontFamily: "sans-extrabold" },
  languageText: { flex: 1, marginHorizontal: 13 },
  languageName: { color: "#211934", fontSize: 17, fontFamily: "sans-bold" },
  languageHint: { marginTop: 2, color: "#827A8F", fontSize: 12, fontFamily: "sans-regular" },
  arrow: { color: "#8262B8", fontSize: 31, lineHeight: 33, fontFamily: "sans-light" },
  ltr: { textAlign: "left", writingDirection: "ltr" },
  rtl: { textAlign: "right", writingDirection: "rtl" },
});
