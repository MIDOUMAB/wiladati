import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Alimentation = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const foodImage = languageData === "ar" ? images.foodArImg : images.foodFrImg;

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
              className={`text-3xl font-sans-bold text-[#081126] ${languageData === "ar" ? "mr-2" : "ml-2"}`}
            >
              {t("foodTitle")}
            </Text>
          </View>

          {/* Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-6 ${textAlign}`}
          >
            {t("foodIntro")}
          </Text>

          {/* Advice Points */}
          <View className="space-y-2">
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("foodPoint1")}
            </Text>
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("foodPoint2")}
            </Text>
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("foodPoint3")}
            </Text>
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("foodPoint4")}
            </Text>
          </View>

          {/* Image */}
          <View className="flex-1 items-center h-62.5 my-6">
            <Image
              source={foodImage}
              resizeMode="contain"
              className="h-62.5 w-87.5"
            />
          </View>

          {/* More Advice Points */}
          <View className="space-y-2">
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("foodPoint5")}
            </Text>
            <Text
              className={`text-base font-semibold text-[#1E3A8A] ${textAlign}`}
            >
              {"\u2022"} {t("foodPoint6")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Alimentation;
