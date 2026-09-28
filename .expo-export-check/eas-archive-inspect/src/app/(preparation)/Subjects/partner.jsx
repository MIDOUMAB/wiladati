import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Partner = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";

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
              className={`text-3xl font-sans-bold text-[#081126] ${languageData === "ar" ? "mr-2" : "ml-2"}`}
            >
              {t("PartenaireTitle")}
            </Text>
          </View>
          {/* Advice Section */}
          <Text className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}>
            {t("PartenaireIntro")}
          </Text>

          <View className="space-y-4 mt-5">
            <Text
              className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("PartenairePt1Title")}{" "}
              <Text
                className={`text-lg font-normal text-gray-800 ${textAlign}`}
              >
                {t("PartenairePt1")}
              </Text>
            </Text>
            <Text
              className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("PartenairePt2Title")}{" "}
              <Text
                className={`text-lg font-normal text-gray-800 ${textAlign}`}
              >
                {t("PartenairePt2")}
              </Text>
            </Text>
            <Text
              className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("PartenairePt3Title")}{" "}
              <Text
                className={`text-lg font-normal text-gray-800 ${textAlign}`}
              >
                {t("PartenairePt3")}
              </Text>
            </Text>
            <Text
              className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("PartenairePt4Title")}{" "}
              <Text
                className={`text-lg font-normal text-gray-800 ${textAlign}`}
              >
                {t("PartenairePt4")}
              </Text>
            </Text>
            <Text
              className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("PartenairePt5Title")}{" "}
              <Text
                className={`text-lg font-normal text-gray-800 ${textAlign}`}
              >
                {t("PartenairePt5")}
              </Text>
            </Text>
            <Text
              className={`text-lg font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("PartenairePt6Title")}{" "}
              <Text
                className={`text-lg font-normal text-gray-800 ${textAlign}`}
              >
                {t("PartenairePt6")}
              </Text>
            </Text>
          </View>

          {/* Image */}
          <View className="flex-1 items-center h-50 my-4">
            <Image
              source={images.partnerImg}
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

export default Partner;
