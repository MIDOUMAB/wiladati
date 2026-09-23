import { icons } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const hygienePersonnelle = () => {
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
              onPress={() => router.push("/apresAcc")}
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
              {t("apresAccouchement.hygienePersonnelle.title")}
            </Text>
          </View>

          {/* Douche */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.hygienePersonnelle.douche.title")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text
              className={`text-base font-semibold text-gray-800 ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.douche.accouchementNaturel",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t(
                "apresAccouchement.hygienePersonnelle.douche.accouchementNaturelSansEpisiotomie",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t(
                "apresAccouchement.hygienePersonnelle.douche.accouchementNaturelAvecEpisiotomie",
              )}
            </Text>
            <Text
              className={`text-base font-semibold text-gray-800 ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.douche.accouchementCesarienne",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {t("apresAccouchement.hygienePersonnelle.douche.cesarienne")}
            </Text>
          </View>

          {/* Soins des points de suture */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {t("apresAccouchement.hygienePersonnelle.soinsPointsSuture.title")}
          </Text>

          {/* Accouchement naturel */}
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text
              className={`text-base font-semibold text-gray-800 ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.0",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.1",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.2",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.3",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.4",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.5",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.6",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.7",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.8",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.9",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.10",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.11",
              )}
            </Text>
            <Text
              className={`text-base font-semibold text-gray-800 ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.12",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.13",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.14",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.accouchementNaturel.15",
              )}
            </Text>
          </View>

          {/* Césarienne */}
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text
              className={`text-base font-semibold text-gray-800 ${textAlign}`}
            >
              {"\u2022"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.0",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.1",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.2",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.3",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.4",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.5",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.6",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad2} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.7",
              )}
            </Text>
            <Text
              className={`text-base font-semibold text-red-600 ${pad2} ${textAlign}`}
            >
              +{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.8",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad4} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.9",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad4} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.10",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad4} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.11",
              )}
            </Text>
            <Text className={`text-base text-gray-600 ${pad4} ${textAlign}`}>
              {"\u25E6"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.12",
              )}
            </Text>
            <Text className={`text-base text-blue-600 ${pad3} ${textAlign}`}>
              {"\u2023"}{" "}
              {t(
                "apresAccouchement.hygienePersonnelle.soinsPointsSuture.cesarienne.13",
              )}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default hygienePersonnelle;
