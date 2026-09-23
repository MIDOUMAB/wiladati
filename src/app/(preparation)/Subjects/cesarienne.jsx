import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const Cesarienne = () => {
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
              {t("pendantAccouchement.cesarienne.title")}
            </Text>
          </View>

          {/* Instructions */}
          <Text className={`text-base text-gray-700 mb-6 ${textAlign}`}>
            {t("pendantAccouchement.cesarienne.instructions")}
          </Text>

          {/* Avant la césarienne */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("pendantAccouchement.cesarienne.avantTitre")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.avant.0")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.avant.1")}
            </Text>
          </View>

          {/* Pendant la césarienne */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("pendantAccouchement.cesarienne.pendantTitre")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.pendant.0")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.pendant.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.pendant.2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.pendant.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.pendant.4")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.pendant.5")}
            </Text>
          </View>

          {/* Après la césarienne */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("pendantAccouchement.cesarienne.apresTitre")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.0")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.4")}
            </Text>
            <View className="flex-1 items-center h-55 my-4">
              <Image
                source={images.cesarienne}
                resizeMode="contain"
                className="h-60 w-90"
              />
            </View>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.5")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.6")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"} {t("pendantAccouchement.cesarienne.apres.7")}
            </Text>
          </View>

          {/* Gaz après césarienne */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("pendantAccouchement.cesarienne.gazApresCesarienneTitre")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.0")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.4")}
            </Text>

            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.5")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("pendantAccouchement.cesarienne.gazApresCesarienne.6")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Cesarienne;
