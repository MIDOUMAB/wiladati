import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const AllaitementMaternel = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const allaitImage =
    languageData === "ar" ? images.allaitementAr : images.allaitementFr;
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
              onPress={() => router.push("/apresAcc")}
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
              {t("apresAccouchement.allaitementMaternel.title")}
            </Text>
          </View>

          {/* Définition */}
          <Text className={`text-base text-gray-700 mb-2 ${textAlign}`}>
            {t("apresAccouchement.allaitementMaternel.definition.0")}
          </Text>
          <Text className={`text-base text-gray-700 mb-4 ${textAlign}`}>
            {t("apresAccouchement.allaitementMaternel.definition.1")}
          </Text>
          <View className="flex-1 items-center h-55 my-2">
            <Image
              source={images.arbre}
              resizeMode="contain"
              className="h-55 w-90"
            />
          </View>

          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.1")}
            </Text>
            <Text
              className={`text-base text-gray-800 font-semibold ${textAlign}`}
            >
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.2")}
            </Text>
            <Text
              className={`text-base text-gray-800 font-semibold ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.5")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.6")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.7")}
            </Text>
            <Text
              className={`text-base text-gray-800 font-semibold ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.4")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.8")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.9")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {t("apresAccouchement.allaitementMaternel.miseAuSeinPrécoce.10")}
            </Text>
          </View>

          {/* Comment allaiter */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.allaitementMaternel.commentAllaiter.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.commentAllaiter.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.commentAllaiter.2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.commentAllaiter.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.commentAllaiter.4")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.commentAllaiter.5")}
            </Text>
            <View className="flex-1 items-center h-100 my-2">
              <Image
                source={allaitImage}
                resizeMode="contain"
                className="h-100 w-87.5"
              />
            </View>
            <View className="flex-1 items-center h-50 my-4">
              <Image
                source={images.bebe}
                resizeMode="contain"
                className="h-50 w-87.5"
              />
            </View>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.allaitementMaternel.commentAllaiter.6")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default AllaitementMaternel;
