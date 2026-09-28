import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Stimulateur = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const pad2 = languageData === "ar" ? "pr-2" : "pl-2";
  const pad3 = languageData === "ar" ? "pr-3" : "pl-3";
  const pad4 = languageData === "ar" ? "pr-4" : "pl-4";
  const pad6 = languageData === "ar" ? "pr-6" : "pl-6";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 28 }}>
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
              className={`w-[90%] text-3xl font-sans-bold text-[#081126] ${languageData === "ar" ? "text-right mr-2" : "text-left ml-2"}`}
            >
              {t("stimulatorsTitle")}
            </Text>
          </View>

          {/* Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-4 ${textAlign}`}
          >
            {t("stimulatorsIntro")}
          </Text>

          {/* Sport */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("stimulatorsSportTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-4 ${textAlign}`}>
            {t("stimulatorsSportIntro")}
          </Text>

          {/* Massage */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("stimulatorsMassageTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("stimulatorsMassageEx")}
          </Text>
          <Text className={`text-base text-gray-800 mb-4 ${textAlign}`}>
            {t("stimulatorsMassageEx2")}
          </Text>
          <View className="flex-1 items-center h-62.5 my-4">
            <Image
              source={images.massage4Img}
              resizeMode="cover"
              className="h-full w-[320px]"
            />
          </View>

          {/* Sexual Activity */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("stimulatorsSexTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-4 ${textAlign}`}>
            {t("stimulatorsSexEx")}
          </Text>

          {/* Bath */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("stimulatorsBathTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-6 ${textAlign}`}>
            {t("stimulatorsBathEx")}
          </Text>

          {/* Positions */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("stimulatorsPositionsTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-6 ${textAlign}`}>
            {t("stimulatorsPositionsEx")}
          </Text>
          <View className="flex-1 items-center h-55 my-2">
            <Image
              source={images.positionImg}
              resizeMode="cover"
              className="h-50 w-87.5"
            />
          </View>
          <View className="flex-1 items-center h-55 my-2">
            <Image
              source={images.position2Img}
              resizeMode="contain"
              className="h-50 w-87.5"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Stimulateur;
