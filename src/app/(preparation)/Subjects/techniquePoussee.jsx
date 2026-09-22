import { icons } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const TechniquePoussee = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const pad2 = languageData === "ar" ? "pr-2" : "pl-2";

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
              {t("pendantAccouchement.technique_poussee.title")}
            </Text>
          </View>

          {/* Instructions */}
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.technique_poussee.instructions.0")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.technique_poussee.instructions.1")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.technique_poussee.instructions.2")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.technique_poussee.instructions.3")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default TechniquePoussee;
