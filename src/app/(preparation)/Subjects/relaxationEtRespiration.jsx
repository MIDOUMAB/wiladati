import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const RelaxationEtRespiration = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const respImage =
    languageData === "ar" ? images.respirationAr : images.relaxImg;
  const pad2 = languageData === "ar" ? "pr-2" : "pl-2";
  const pad3 = languageData === "ar" ? "pr-3" : "pl-3";
  const pad4 = languageData === "ar" ? "pr-4" : "pl-4";
  const pad6 = languageData === "ar" ? "pr-6" : "pl-6";

  return (
    <SafeAreaView className="flex-1 bg-white">
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
              className={`text-2xl font-sans-bold text-[#081126] ${languageData === "ar" ? "mr-2" : "ml-2"}`}
            >
              {t("relaxTitle")}
            </Text>
          </View>

          {/* Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-4 ${textAlign}`}
          >
            {t("relaxIntro1")}
          </Text>
          <View className={`space-y-2 ${pad2}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("relaxIntro1Pt1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("relaxIntro1Pt2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("relaxIntro1Pt3")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("relaxIntro1Pt4")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("relaxIntro1Pt5")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("relaxIntro1Pt6")}
            </Text>
          </View>
          <Text
            className={`text-base leading-relaxed text-gray-800 mt-4 mb-2 ${textAlign}`}
          >
            {t("relaxIntro1Pt7")}
          </Text>
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-4 ${textAlign}`}
          >
            {t("relaxIntro2")}
          </Text>

          {/* Step 1 */}
          <Text
            className={`text-base font-semibold text-[#1E3A8A] mb-2 ${textAlign} ${pad2}`}
          >
            {"\u2022"} {t("relaxStep1")}
          </Text>
          <View className="flex-1 items-center h-70 my-4">
            <Image
              source={respImage}
              resizeMode="contain"
              className="h-77.5 w-75"
            />
          </View>
          <View className={`space-y-2 ${pad4}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep1Pt1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep1Pt2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep1Pt3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep1Pt4")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep1Pt5")}
            </Text>
          </View>

          {/* Step 2 */}
          <Text
            className={`text-base font-semibold text-[#1E3A8A] mt-4 mb-2 ${textAlign} ${pad2}`}
          >
            {"\u2022"} {t("relaxStep2")}
          </Text>
          {/* Step 3 */}
          <Text
            className={`text-base font-semibold text-[#1E3A8A] mt-2 mb-2 ${textAlign} ${pad2}`}
          >
            {"\u2022"} {t("relaxStep3")}
          </Text>
          <View className="space-y-2 pl-4">
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep3Pt1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep3Pt2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep3Pt3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("relaxStep3Pt4")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default RelaxationEtRespiration;
