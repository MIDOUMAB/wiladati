import images from "@/../constants/images";
import "@/../global.css";
import { useClerk, useUser } from "@clerk/expo";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { styled } from "nativewind";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  I18nManager,
  Image,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../constants/icons";
import { setLanguage, type AppLanguage } from "../../../lang/i18n";
import { useAppDirection } from "../../hooks/use-app-direction";
import { useLanguage } from "../../hooks/use-language";
const SafeAreaView = styled(RNSafeAreaView);
const profileWomanImage = require("../../../assets/images/wiladati-profile-woman.png");

const languageOptions: { code: AppLanguage; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

export default function App() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const { t, i18n } = useTranslation();
  const direction = useAppDirection();
  const { languageData } = useLanguage();
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState<AppLanguage | null>(
    null,
  );
  const [languageChangeError, setLanguageChangeError] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
  const [edd, setEdd] = useState<Date | undefined>();
  const [countWeeks, setCountWeeks] = useState(0);
  const [countDays, setCountDays] = useState(0);

  const getSelectedWeekMetrics = (week: number) => {
    if (week <= 8) {
      return {
        weight: `${(week * 0.7).toFixed(1)} g`,
        height: `${(week * 0.5).toFixed(1)} cm`,
      };
    }

    if (week <= 16) {
      return {
        weight: `${(week * 25).toFixed(0)} g`,
        height: `${(week * 1.8 + 1).toFixed(1)} cm`,
      };
    }

    if (week <= 24) {
      return {
        weight: `${(week * 110).toFixed(0)} g`,
        height: `${(week * 1.4 + 9).toFixed(1)} cm`,
      };
    }

    if (week <= 32) {
      return {
        weight: `${(week * 270).toFixed(0)} g`,
        height: `${(week * 1.2 + 23).toFixed(1)} cm`,
      };
    }

    return {
      weight: `${(week * 360).toFixed(0)} g`,
      height: `${(week * 0.8 + 35).toFixed(1)} cm`,
    };
  };

  const selectedWeekIntro =
    countWeeks > 0 && countWeeks <= 42
      ? ((t(`weeks.${countWeeks}.intro`, { returnObjects: true }) as
          string[] | undefined) ?? [])
      : [];

  const selectedWeekMetrics =
    countWeeks > 0 ? getSelectedWeekMetrics(countWeeks) : null;
  const selectedWeekImage =
    countWeeks > 0
      ? (((images as Record<string, unknown>)[`week${countWeeks}Img`] as any) ??
        images.week1Img)
      : images.week1Img;

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const formatDate = (value?: Date) => {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}-${month}-${year}`;
  };

  const countWeeksAndDays = (startDate: Date, endDate: Date) => {
    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const weeks = Math.floor(totalDays / 7);
    setCountWeeks(weeks);
    const remainingDays = totalDays % 7;
    setCountDays(remainingDays);

    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + 280);
    setEdd(newDate);
  };

  const onChange = ({ type }: { type: string }, selectedDate?: Date) => {
    if (type === "set" && selectedDate) {
      setDate(selectedDate);
      setDateOfBirth(selectedDate);
      countWeeksAndDays(selectedDate, new Date());

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const changeLanguage = async (language: AppLanguage) => {
    if (pendingLanguage) return;

    if (i18n.resolvedLanguage === language) {
      setShowLanguagePicker(false);
      return;
    }

    setPendingLanguage(language);
    setLanguageChangeError("");

    try {
      await setLanguage(language);
      I18nManager.allowRTL(language === "ar");
      setShowLanguagePicker(false);
    } catch {
      setLanguageChangeError(
        language === "ar"
          ? "تعذر تغيير اللغة. يرجى المحاولة مرة أخرى."
          : "Impossible de changer la langue. Veuillez réessayer.",
      );
    } finally {
      setPendingLanguage(null);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 85 }}
      >
        <View className="home-header" style={direction.row}>
          <View className="home-user" style={direction.row}>
            <View className="home-avatar">
              <Image
                source={profileWomanImage}
                style={styles.profileAvatarImage}
                resizeMode="contain"
              />
            </View>
            <Text
              className={`home-user-name ${languageData === "ar" ? "mr-2" : "ml-2"}`}
              style={direction.text}
            >
              {user?.firstName || t("welcomeUser")}
            </Text>
          </View>
          <View
            style={(styles.headerActions, direction.row)}
            className="gap-x-2"
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={
                languageData === "ar" ? "تغيير اللغة" : "Changer de langue"
              }
              onPress={() => {
                setLanguageChangeError("");
                setShowLanguagePicker(true);
              }}
              style={({ pressed }) => [
                styles.languageButton,
                pressed && styles.actionPressed,
              ]}
            >
              <Text style={styles.languageGlyph}>文</Text>
              <Text style={styles.languageCode}>
                {languageData === "ar" ? "AR" : "FR"}
              </Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={
                languageData === "ar" ? "تسجيل الخروج" : "Se déconnecter"
              }
              onPress={async () => {
                await signOut();
                router.replace("/sign-in");
              }}
              style={({ pressed }) => [
                styles.logoutButton,
                pressed && styles.actionPressed,
              ]}
            >
              <Image
                source={icons.logout}
                style={[
                  styles.logoutIcon,
                  languageData === "ar" ? { transform: [{ scaleX: -1 }] } : {},
                ]}
              />
            </Pressable>
          </View>
        </View>

        <View className="overflow-hidden rounded-[28px] bg-foreground shadow-lg shadow-foreground/25">
          <View className="px-6 pb-5 pt-6">
            <View className="mb-5 flex-row items-start justify-between">
              <View className="flex-1 pr-4">
                <Text
                  className="mb-1 text-sm font-sans-bold uppercase tracking-[1.5px] text-[#F7B267]"
                  style={direction.text}
                >
                  {t("calendarSubtitle")}
                </Text>
                {/* <Text
                  className="text-2xl font-sans-bold text-white"
                  style={direction.text}
                >
                  {t("calendarSubtitle")}
                </Text> */}
              </View>
            </View>

            {showPicker && (
              <DateTimePickerAndroid
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}

            <Text
              className="mb-2 text-sm font-sans-semibold text-white/65"
              style={direction.text}
            >
              {t("deliveryDate")}
            </Text>
            <Pressable
              onPress={toggleDatePicker}
              className="flex-row items-center justify-between rounded-2xl border border-accent/50 bg-[#E8E9FF] px-4 py-3.5 active:opacity-80"
              style={direction.row}
            >
              <Text
                className="text-lg font-sans-bold text-foreground"
                style={direction.text}
              >
                {dateOfBirth ? formatDate(dateOfBirth) : t("chooseDate")}
              </Text>
              <Text
                className="text-sm font-sans-semibold text-accent"
                style={direction.text}
              >
                {t("edit")}
              </Text>
            </Pressable>
          </View>

          <View
            className="flex-row border-t border-white/10 bg-primary px-6 py-5"
            style={direction.row}
          >
            <View
              className={`flex-1 border-white/10 ${languageData === "ar" ? "border-l  pl-4" : "border-r  pr-4"}`}
            >
              <Text
                className="mb-2 text-xs font-sans-semibold uppercase tracking-[1px] text-white/55"
                style={direction.text}
              >
                {t("age")}
              </Text>
              {dateOfBirth ? (
                <Text
                  className="text-lg font-sans-bold text-white"
                  style={direction.text}
                >
                  {t("weeksDays", { countWeeks, countDays })}
                </Text>
              ) : (
                <Text
                  className="text-base font-sans-medium text-white/55"
                  style={direction.text}
                >
                  {t("pending")}
                </Text>
              )}
            </View>
            <View
              className={`flex-1 ${languageData === "ar" ? "pr-4" : "pl-4"}`}
            >
              <Text
                className="mb-2 text-xs font-sans-semibold uppercase tracking-[1px] text-white/55"
                style={direction.text}
              >
                {t("AccTitle")}
              </Text>
              <Text
                className="text-lg font-sans-bold text-accent"
                style={direction.text}
              >
                {edd ? formatDate(edd) : "-- / -- / ----"}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6 space-y-2">
          {countWeeks > 0 && countWeeks <= 42 ? (
            <View className="overflow-hidden rounded-[28px] border border-[#E8DEF6] bg-white shadow-sm shadow-black/5">
              <View className="bg-[#F5EEFF] px-4 py-4">
                {/* <View
                  className="mb-4 flex-row items-center justify-between"
                  style={direction.row}
                >
                  <Text
                    className="text-lg font-sans-bold text-[#2B1646]"
                    style={direction.text}
                  >
                    {t("age")}
                  </Text>
                  <Text
                    className="text-sm font-sans-bold text-[#6A0DAD]"
                    style={direction.text}
                  >
                    {t("weeksDays", { countWeeks, countDays })}
                  </Text>
                </View> */}

                <View className="items-center justify-center">
                  <Image
                    source={selectedWeekImage}
                    className="h-50 w-50 rounded-full border-4 border-white bg-[#F3EBFF]"
                    resizeMode="cover"
                  />
                </View>

                <View
                  className="mt-4 flex-row items-stretch justify-between gap-3"
                  style={direction.row}
                >
                  <View className="flex-1 rounded-2xl bg-[#F8F3FF] p-3">
                    <Text
                      className="text-[11px] font-sans-bold uppercase tracking-[1px] text-[#7A58A1]"
                      style={direction.text}
                    >
                      {t("weight")}
                    </Text>
                    <Text
                      className="mt-1 text-lg font-sans-bold text-[#2B1646]"
                      style={direction.text}
                    >
                      {selectedWeekMetrics?.weight}
                    </Text>
                  </View>

                  <View className="flex-1 rounded-2xl bg-[#F8F3FF] p-3">
                    <Text
                      className="text-[11px] font-sans-bold uppercase tracking-[1px] text-[#7A58A1]"
                      style={direction.text}
                    >
                      {t("width")}
                    </Text>
                    <Text
                      className="mt-1 text-lg font-sans-bold text-[#2B1646]"
                      style={direction.text}
                    >
                      {selectedWeekMetrics?.height}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="px-4 py-4">
                {selectedWeekIntro.slice(0, 2).map((paragraph, index) => (
                  <Text
                    key={`${paragraph}-${index}`}
                    className={`mb-2 text-base leading-6 text-slate-700 ${
                      languageData === "ar" ? "text-right" : "text-left"
                    }`}
                    style={direction.text}
                  >
                    {paragraph}
                  </Text>
                ))}

                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: "/Subjects/weeks",
                      params: { week: String(countWeeks) },
                    })
                  }
                  className="mt-4 rounded-2xl bg-[#6A0DAD] px-4 py-3"
                >
                  <Text className="text-center text-base font-sans-bold text-white">
                    {t("voirPlus")}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <View className="items-center justify-center rounded-[28px] border border-dashed border-[#D9BCFF] bg-white px-6 py-8">
              <Text
                className="text-lg font-sans-bold text-[#2B1646]"
                style={direction.text}
              >
                {t("pending")}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Modal
        visible={showLanguagePicker}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLanguagePicker(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            accessibilityLabel={languageData === "ar" ? "إغلاق" : "Fermer"}
            onPress={() => setShowLanguagePicker(false)}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.languageDialog}>
            <Text style={styles.dialogTitle}>
              {languageData === "ar"
                ? "اختاري لغتك"
                : "Choisissez votre langue"}
            </Text>
            {languageOptions.map((language) => {
              const isSelected = languageData === language.code;

              return (
                <Pressable
                  key={language.code}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  disabled={pendingLanguage !== null}
                  onPress={() => changeLanguage(language.code)}
                  style={({ pressed }) => [
                    styles.languageOption,
                    isSelected && styles.selectedLanguageOption,
                    pressed && styles.actionPressed,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionCode,
                      language.code === "ar" && styles.arabicOptionCode,
                    ]}
                  >
                    {language.code.toUpperCase()}
                  </Text>
                  <Text style={styles.optionLabel}>{language.label}</Text>
                  {pendingLanguage === language.code ? (
                    <ActivityIndicator color="#6A0DAD" />
                  ) : isSelected ? (
                    <Text style={styles.selectedMark}>✓</Text>
                  ) : null}
                </Pressable>
              );
            })}
            {languageChangeError ? (
              <Text accessibilityRole="alert" style={styles.languageError}>
                {languageChangeError}
              </Text>
            ) : null}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileAvatarImage: {
    width: 52,
    height: 52,
  },
  languageButton: {
    minWidth: 54,
    height: 46,
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E9E1F3",
    backgroundColor: "#FFFFFF",
  },
  languageGlyph: {
    color: "#6A0DAD",
    fontSize: 19,
    fontFamily: "sans-bold",
  },
  languageCode: {
    color: "#514365",
    fontSize: 11,
    fontFamily: "sans-extrabold",
  },
  logoutButton: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F3DED9",
    backgroundColor: "#FFF8F6",
  },
  logoutIcon: { width: 22, height: 22, resizeMode: "contain" },
  actionPressed: { opacity: 0.72, transform: [{ scale: 0.97 }] },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(24, 12, 40, 0.45)",
  },
  languageDialog: {
    width: "100%",
    maxWidth: 380,
    gap: 12,
    padding: 22,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    shadowColor: "#210255",
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
  },
  dialogTitle: {
    marginBottom: 4,
    color: "#210255",
    fontSize: 21,
    fontFamily: "sans-extrabold",
  },
  languageOption: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#E9E3F0",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
  selectedLanguageOption: {
    borderColor: "#BDA5E3",
    backgroundColor: "#F9F5FF",
  },
  optionCode: {
    width: 38,
    height: 38,
    overflow: "hidden",
    borderRadius: 13,
    backgroundColor: "#EAF0FF",
    color: "#37265A",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12,
    fontFamily: "sans-extrabold",
    lineHeight: 38,
  },
  arabicOptionCode: { backgroundColor: "#FBE9D7" },
  optionLabel: {
    flex: 1,
    color: "#261D35",
    fontSize: 16,
    fontFamily: "sans-bold",
  },
  selectedMark: {
    color: "#6A0DAD",
    fontSize: 20,
    fontFamily: "sans-bold",
  },
  languageError: {
    color: "#B42318",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "sans-medium",
  },
});
