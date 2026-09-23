import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const signesAlert = () => {
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
              onPress={() => router.push("/bookmark")}
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
              {t("hospitalTitle")}
            </Text>
          </View>

          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx1Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx1")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx2Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx2")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx3Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx3")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx4Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx4")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx5Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx5")}
          </Text>
          <View className="flex-1 justify-center items-center h-65 ">
            <Image
              source={images.signe3}
              resizeMode="contain"
              className="h-70 w-87.5"
            />
          </View>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-3 mb-3 ${textAlign}`}
          >
            {t("hospitalEx6Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx6")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx7Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx7")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx8Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx8")}
          </Text>
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {t("hospitalEx9Title")}
          </Text>
          <Text className={`text-base text-gray-700 ${pad2} ${textAlign}`}>
            {" "}
            {t("hospitalEx9")}
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default signesAlert;
