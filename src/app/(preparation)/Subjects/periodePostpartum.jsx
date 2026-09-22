import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const PeriodePostpartum = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const saignementImage =
    languageData === "ar" ? images.saignementsAr : images.saignementsFr;
  const depressImage = languageData === "ar" ? images.depress : images.depr;
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
              onPress={() => router.back()}
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
              {t("apresAccouchement.periodePostpartum.title")}
            </Text>
          </View>

          {/* Conseil général */}
          <Text className={`text-base text-gray-700 mb-6 ${textAlign}`}>
            {t("apresAccouchement.periodePostpartum.conseilGeneral")}
          </Text>

          {/* Saignements postnataux */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.periodePostpartum.saignementsPostnataux.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.saignementsPostnataux.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.saignementsPostnataux.2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.saignementsPostnataux.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.saignementsPostnataux.4")}
            </Text>
          </View>
          <View className="flex-1 items-center h-75 my-4">
            <Image
              source={saignementImage}
              resizeMode="contain"
              className="h-75 w-87.5"
            />
          </View>

          {/* Contractions utérines */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.periodePostpartum.contractionsUterines.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.periodePostpartum.contractionsUterines.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.periodePostpartum.contractionsUterines.2")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad3} ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.contractionsUterines.3")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad3} ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.contractionsUterines.4")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad3} ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.contractionsUterines.5")}
            </Text>
            <Text className={`text-base text-gray-600 ${pad3} ${textAlign}`}>
              {"\u2022"}{" "}
              {t("apresAccouchement.periodePostpartum.contractionsUterines.6")}
            </Text>
          </View>

          {/* Troubles urinaires et défécation */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t(
              "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.title",
            )}
          </Text>
          <Text className={`text-base text-gray-700 mb-2 ${textAlign}`}>
            {t(
              "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.introduction",
            )}
          </Text>
          <View className={`space-y-2 mb-6 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.symptomes.0",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.symptomes.1",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.symptomes.2",
              )}
            </Text>
          </View>
          <Text className={`text-base italic text-gray-500 mb-2 ${textAlign}`}>
            {t(
              "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.note",
            )}
          </Text>
          <Text
            className={`text-base text-gray-800 my-4 font-semibold ${textAlign}`}
          >
            {t(
              "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.conseils.0",
            )}
          </Text>
          <View className={`space-y-2 mb-6 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.conseils.1",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.conseils.2",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.conseils.3",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.periodePostpartum.troublesUrinairesDefecation.conseils.4",
              )}
            </Text>
          </View>

          {/* Fatigue et épuisement */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.periodePostpartum.fatigueEpuisement.0")}
          </Text>
          <Text className={`text-base text-gray-700 mb-6 ${pad2} ${textAlign}`}>
            {t("apresAccouchement.periodePostpartum.fatigueEpuisement.1")}
          </Text>

          {/* Congestion des seins */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.periodePostpartum.congestionSeins.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.periodePostpartum.congestionSeins.1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.periodePostpartum.congestionSeins.2")}
            </Text>
          </View>

          {/* Dysfonctionnement sexuel */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.periodePostpartum.dysfonctionnementSexuel.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t(
                "apresAccouchement.periodePostpartum.dysfonctionnementSexuel.1",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t(
                "apresAccouchement.periodePostpartum.dysfonctionnementSexuel.2",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t(
                "apresAccouchement.periodePostpartum.dysfonctionnementSexuel.3",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t(
                "apresAccouchement.periodePostpartum.dysfonctionnementSexuel.4",
              )}
            </Text>
          </View>

          {/* Changements d’humeur */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.periodePostpartum.changementsHumeur.0")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.periodePostpartum.changementsHumeur.1")}
            </Text>
            <View className="flex-1 items-center h-75 my-4">
              <Image
                source={depressImage}
                resizeMode="contain"
                className="h-75 w-87.5"
              />
            </View>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.periodePostpartum.changementsHumeur.2")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default PeriodePostpartum;
