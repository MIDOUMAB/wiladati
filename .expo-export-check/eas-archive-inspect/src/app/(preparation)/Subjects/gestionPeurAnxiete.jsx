import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const GestionPeurAnxiete = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const gestionImage =
    languageData === "ar" ? images.gestionPeurAr : images.gestionPeurFr;
  const pad2 = languageData === "ar" ? "pr-2" : "pl-2";
  const pad3 = languageData === "ar" ? "pr-3" : "pl-3";
  const pad4 = languageData === "ar" ? "pr-4" : "pl-4";
  const pad6 = languageData === "ar" ? "pr-6" : "pl-6";

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
              {t("pendantAccouchement.gestionPeurAnxiete.title")}
            </Text>
          </View>

          {/* Introduction */}
          <Text className={`text-base text-gray-700 mb-2 ${textAlign}`}>
            {t("pendantAccouchement.gestionPeurAnxiete.introduction.0")}
          </Text>
          <View className="flex-1 items-center h-50 my-4">
            <Image
              source={gestionImage}
              resizeMode="contain"
              className="h-50 w-87.5"
            />
          </View>
          <Text className={`text-base text-gray-700 mb-4 ${textAlign}`}>
            {t("pendantAccouchement.gestionPeurAnxiete.introduction.1")}
          </Text>

          {/* Negative Effects */}
          <View className={`space-y-2 mb-6 ${pad4}`}>
            <Text className={`text-base text-red-500 ${textAlign}`}>
              {"\u2716"}{" "}
              {t("pendantAccouchement.gestionPeurAnxiete.effetsNegatifs.0")}
            </Text>
            <Text className={`text-base text-red-500 ${textAlign}`}>
              {"\u2716"}{" "}
              {t("pendantAccouchement.gestionPeurAnxiete.effetsNegatifs.1")}
            </Text>
          </View>

          {/* Studies */}
          <Text className={`text-base italic text-gray-500 mb-6 ${textAlign}`}>
            {t("pendantAccouchement.gestionPeurAnxiete.etudes")}
          </Text>

          {/* Correct Advice */}
          <Text className={`text-base text-gray-700 mb-2 ${textAlign}`}>
            {t("pendantAccouchement.gestionPeurAnxiete.gestionPeur.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad4}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"}{" "}
              {t("pendantAccouchement.gestionPeurAnxiete.gestionPeur.1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"}{" "}
              {t("pendantAccouchement.gestionPeurAnxiete.gestionPeur.2")}
            </Text>
          </View>

          {/* Practical Tips */}
          <View className="space-y-2 mb-6">
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              1- {t("pendantAccouchement.gestionPeurAnxiete.conseils.0")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              2- {t("pendantAccouchement.gestionPeurAnxiete.conseils.1")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              3- {t("pendantAccouchement.gestionPeurAnxiete.conseils.2")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              4- {t("pendantAccouchement.gestionPeurAnxiete.conseils.3")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              5- {t("pendantAccouchement.gestionPeurAnxiete.conseils.4")}
            </Text>
            <View className="flex-1 items-center h-50 my-4">
              <Image
                source={images.positionImg}
                resizeMode="contain"
                className="h-54.5 w-87.5"
              />
            </View>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              6- {t("pendantAccouchement.gestionPeurAnxiete.conseils.5")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              7- {t("pendantAccouchement.gestionPeurAnxiete.conseils.6")}
            </Text>
            <View className="flex-1 items-center h-50 my-4">
              <Image
                source={images.appareil}
                resizeMode="contain"
                className="h-54.5 w-87.5"
              />
            </View>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              8- {t("pendantAccouchement.gestionPeurAnxiete.conseils.7")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              9- {t("pendantAccouchement.gestionPeurAnxiete.conseils.8")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              10- {t("pendantAccouchement.gestionPeurAnxiete.conseils.9")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              11- {t("pendantAccouchement.gestionPeurAnxiete.conseils.10")}
            </Text>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              12- {t("pendantAccouchement.gestionPeurAnxiete.conseils.11")}
            </Text>
            <View className="flex-1 items-center h-50 my-4">
              <Image
                source={images.placenta}
                resizeMode="contain"
                className="h-54.5 w-87.5"
              />
            </View>
            <Text className={`text-base text-gray-700 ${textAlign}`}>
              13- {t("pendantAccouchement.gestionPeurAnxiete.conseils.12")}
            </Text>
          </View>
          <Text className={`text-base text-green-700 ${pad2} ${textAlign}`}>
            {"\u2714"} {t("pendantAccouchement.gestionPeurAnxiete.conseils.13")}
          </Text>
          {/* Note */}
          <Text className={`text-base italic text-gray-500 mt-4 ${textAlign}`}>
            {t("pendantAccouchement.gestionPeurAnxiete.note")}
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default GestionPeurAnxiete;
