import { icons } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const alimentationBebe = () => {
  const { t, i18n } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const pad2 = languageData === "ar" ? "pr-2" : "pl-2";
  const pad3 = languageData === "ar" ? "pr-3" : "pl-3";
  const pad4 = languageData === "ar" ? "pr-4" : "pl-4";
  const pad6 = languageData === "ar" ? "pr-6" : "pl-6";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="px-5 py-6">
          <View
            className={`flex-row items-center mb-6 ${languageData === "ar" ? "flex-row-reverse" : ""}`}
          >
            <Pressable
              className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center shadow-sm"
              onPress={() => router.push("/Subjects/conseilsBebe")}
            >
              <Image
                source={icons.leftArrow}
                resizeMode="contain"
                tintColor="#210255"
                className="w-5 h-5"
                style={
                  languageData === "ar" ? { transform: [{ scaleX: -1 }] } : {}
                }
              />
            </Pressable>
            <Text
              className={`w-[90%] text-3xl font-sans-bold text-[#081126] ${languageData === "ar" ? "text-right mr-2" : "text-left ml-2"}`}
            >
              {t("apresAccouchement.conseilsNourrisson.alimentation.0")}
            </Text>
          </View>

          <View className={`space-y-2 mb-6`}>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.conseilsNourrisson.alimentation.1")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.conseilsNourrisson.alimentation.2")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.conseilsNourrisson.alimentation.3")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.conseilsNourrisson.alimentation.4")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.conseilsNourrisson.alimentation.5")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.conseilsNourrisson.alimentation.6")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default alimentationBebe;
