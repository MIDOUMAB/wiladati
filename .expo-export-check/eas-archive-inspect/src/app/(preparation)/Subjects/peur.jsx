import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Peur = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const pad2 = languageData === "ar" ? "pr-2" : "pl-2";
  const pad3 = languageData === "ar" ? "pr-3" : "pl-3";
  const pad4 = languageData === "ar" ? "pr-4" : "pl-4";
  const pad6 = languageData === "ar" ? "pr-6" : "pl-6";

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <ScrollView contentContainerStyle={{ paddingBottom: 28 }}> */}
      <ScrollView>
        <View className="px-5 py-6">
          {/* Header */}
          <View
            className={`flex-row items-center mb-6 ${languageData === "ar" ? "flex-row-reverse" : ""}`}
          >
            <Pressable
              className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center shadow-sm"
              onPress={() => router.push("/avantAcc")}
            >
              <Image
                source={icons.leftArrow}
                resizeMode="contain"
                tintColor="#374151"
                className="w-5 h-5"
                style={
                  languageData === "ar" ? { transform: [{ scaleX: -1 }] } : {}
                }
              />
            </Pressable>
            <Text
              className={`text-3xl font-sans-bold text-[#081126] ${languageData === "ar" ? "mr-2" : "ml-2"}`}
            >
              {t("fearTitle")}
            </Text>
          </View>

          {/* Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}
          >
            {t("fearIntro1")}
          </Text>

          {/* Image */}
          <View className="flex-1 justify-center items-center mb-6">
            <Image
              source={images.fearImg}
              resizeMode="contain"
              className="h-60"
            />
          </View>

          {/* More Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}
          >
            {t("fearIntro2")}
          </Text>

          {/* Advice Section */}
          <View className="space-y-3">
            {/* Main advice point */}
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("fearAdvice1")}
            </Text>
            {/* Sub-points */}
            <View className={`space-y-2 ${pad4}`}>
              <Text className={`text-base text-gray-600 ${textAlign}`}>
                {"\u25E6"} {t("fearAdvice1Pt1")}
              </Text>
              <Text className={`text-base text-gray-600 ${textAlign}`}>
                {"\u25E6"} {t("fearAdvice1Pt2")}
              </Text>
              <Text className={`text-base text-gray-600 ${textAlign}`}>
                {"\u25E6"} {t("fearAdvice1Pt3")}
              </Text>
              <Text className={`text-base text-gray-600 ${textAlign}`}>
                {"\u25E6"} {t("fearAdvice1Pt4")}
              </Text>
            </View>

            {/* Other advice points */}
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("fearAdvice2")}
            </Text>
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("fearAdvice3")}
            </Text>
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("fearAdvice4")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Peur;
