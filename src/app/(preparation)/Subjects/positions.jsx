import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Positions = () => {
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
              onPress={() => router.push("/pendantAcc")}
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
              {t("pendantAccouchement.positions.title")}
            </Text>
          </View>

          {/* Instructions */}
          <Text className={`text-base text-gray-700 mb-6 ${textAlign}`}>
            {t("pendantAccouchement.positions.instructions")}
          </Text>

          {/* Examples */}
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.positions.exemples.0")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.positions.exemples.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.positions.exemples.2")}
            </Text>
            <View className="flex-1 items-center h-50 my-4">
              <Image
                source={images.diffPosition}
                resizeMode="cover"
                className="h-50 w-87.5"
              />
            </View>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.positions.exemples.3")}
            </Text>
          </View>
          <View className="flex-1 items-center h-50 my-4">
            <Image
              source={images.positionImg}
              resizeMode="contain"
              className="h-54.5 w-87.5"
            />
          </View>
          <View className="flex-1 items-center h-50 my-4">
            <Image
              source={images.diffPosition2}
              resizeMode="contain"
              className="h-50 w-87.5"
            />
          </View>
          <View className="flex-1 items-center h-100 my-4">
            <Image
              source={images.diffPosition3}
              resizeMode="contain"
              className="h-75 w-125"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Positions;
