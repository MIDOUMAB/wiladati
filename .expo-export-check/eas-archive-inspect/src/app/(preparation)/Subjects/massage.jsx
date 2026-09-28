import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Massage = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const massageImage =
    languageData === "ar" ? images.massageArImg : images.massageFrImg;
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
              {t("perinealMassageTitle")}
            </Text>
          </View>

          {/* Definition */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}
          >
            {t("perinealMassageDef")}
          </Text>
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}
          >
            {t("perinealMassageExample")}
          </Text>

          {/* Note */}
          <Text className={`text-base text-gray-800 mb-4 ${textAlign}`}>
            {t("perinealMassageNote")}
          </Text>
          <View className="flex-1 items-center h-87.5 my-4">
            <Image
              source={massageImage}
              resizeMode="cover"
              className="h-87.5 w-87.5"
            />
          </View>

          {/* Benefits */}
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("perinealMassageBenefit")}
          </Text>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("perinealMassageBenefit1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("perinealMassageBenefit2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("perinealMassageBenefit3")}
            </Text>
          </View>

          {/* Method */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("perinealMassageMethodTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("perinealMassageMethodIntro1")}
          </Text>
          <Text className={`text-base text-gray-800 mb-4 ${textAlign}`}>
            {t("perinealMassageMethodIntro2")}
          </Text>

          {/* External Massage */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${pad2} ${textAlign}`}
          >
            1- {t("perinealMassageExternalTitle")}
          </Text>
          <View className="flex-1 items-center h-67.5 my-4">
            <Image
              source={images.massage2Img}
              resizeMode="cover"
              className="h-67.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("perinealMassageExternalStep1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("perinealMassageExternalStep2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("perinealMassageExternalStep3")}
            </Text>
          </View>

          {/* Internal Massage */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${pad2} ${textAlign}`}
          >
            2- {t("perinealMassageInternalTitle")}
          </Text>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("perinealMassageInternalStep1")}
            </Text>
          </View>
          <Text className={`text-base italic text-gray-500 mt-4 ${textAlign}`}>
            {t("perinealMassageInternalNote")}
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Massage;
