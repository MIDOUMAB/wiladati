import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const signesApp = () => {
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
              onPress={() => router.push("/bookmark")}
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
              {t("signsTitle")}
            </Text>
          </View>

          {/* Signs */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] my-2 ${textAlign}`}
          >
            {"\u2022"} {t("signsEx1Title")}{" "}
            <Text
              className={`text-base font-normal text-gray-700 ${textAlign}`}
            >
              {t("signsEx1")}
            </Text>
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] my-2 ${textAlign}`}
          >
            {"\u2022"} {t("signsEx2Title")}{" "}
            <Text
              className={`text-base font-normal text-gray-700 ${textAlign}`}
            >
              {t("signsEx2")}
            </Text>
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] my-2 ${textAlign}`}
          >
            {"\u2022"} {t("signsEx3Title")}{" "}
            <Text
              className={`text-base font-normal text-gray-700 ${textAlign}`}
            >
              {t("signsEx3")}
            </Text>
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] my-2 ${textAlign}`}
          >
            {"\u2022"} {t("signsEx4Title")}{" "}
            <Text
              className={`text-base font-normal text-gray-700 ${textAlign}`}
            >
              {t("signsEx4")}
            </Text>
          </Text>
          <View className="flex-1 items-center h-62.5 my-4">
            <Image
              source={images.signe}
              resizeMode="contain"
              className="h-62.5 w-100"
            />
          </View>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] my-2 ${textAlign}`}
          >
            {"\u2022"} {t("signsEx5Title")}{" "}
            <Text
              className={`text-base font-normal text-gray-700 ${textAlign}`}
            >
              {t("signsEx5")}
            </Text>
          </Text>

          <Text
            className={`text-lg font-semibold text-[#1E3A8A] my-2 ${textAlign}`}
          >
            {"\u2022"} {t("signsEx6Title")}{" "}
            <Text
              className={`text-base font-normal text-gray-700 ${textAlign}`}
            >
              {t("signsEx6")}
            </Text>
          </Text>
          <View className="flex-1 items-center h-45 my-4">
            <Image
              source={images.signe2}
              resizeMode="contain"
              className="h-45 w-[320px]"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default signesApp;
