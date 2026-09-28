import { icons } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Valise = () => {
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
              {t("birthBagTitle")}
            </Text>
          </View>

          {/* Season */}
          <Text className={`text-lg font-semibold mb-4 ${textAlign}`}>
            {t("birthBagSeason")}
          </Text>

          {/* Baby Items */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            1- {t("birthBagBabyTitle")}
          </Text>
          <View className={`space-y-2 mb-4 ${pad4}`}>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem1")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem2")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem3")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem4")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem5")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem6")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem7")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem8")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem9")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem10")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagBabyItem11")}
            </Text>
          </View>

          {/* Mother Items */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            2- {t("birthBagMotherTitle")}
          </Text>
          <View className={`space-y-2 mb-4 ${pad4}`}>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem1")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem2")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem3")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem4")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem5")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem6")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem7")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem8")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem9")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem10")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {"\u2022"} {t("birthBagMotherItem11")}
            </Text>
          </View>

          {/* Info */}
          <Text className={`text-lg font-semibold  mb-3 ${textAlign}`}>
            {t("birthBagInfoTitle")}
          </Text>
          <View className={`space-y-2 ${pad2}`}>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {t("birthBagInfoEx1")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              {t("birthBagInfoEx2")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Valise;
