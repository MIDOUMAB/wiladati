import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const SportKeigel = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const keigelImage =
    languageData === "ar" ? images.keigelArImg : images.keigelImg;
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
              {t("sportKeigelTitle")}
            </Text>
          </View>

          {/* Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-4 ${textAlign}`}
          >
            {t("sportKegelIntro")}
          </Text>
          <View className="flex-1 items-center h-79 my-2">
            <Image
              source={keigelImage}
              resizeMode="contain"
              className="h-75 w-87.5"
            />
          </View>

          {/* Benefits */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("sportKegelBenefitsTitle")}
          </Text>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelBenefit1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelBenefit2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelBenefit3")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelBenefit4")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelBenefit5")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelBenefit6")}
            </Text>
          </View>

          <Text
            className={`text-base leading-relaxed text-gray-800 mt-3 ${textAlign}`}
          >
            {t("sportKegelNote1")}
          </Text>

          {/* Exercises */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("sportKegelEx")}
          </Text>

          {/* Example Exercise 1 */}
          <Text
            className={`text-base font-semibold text-gray-800 mb-2 ${pad2} ${textAlign}`}
          >
            1- {t("sportKegelEx1Title")}
          </Text>
          <View className="flex-1 items-center h-87.5 my-2">
            <Image
              source={images.keigel2Img}
              resizeMode="contain"
              className="h-87.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx1Point1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx1Point2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx1Point3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx1Point4")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx1Point5")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx1Point6")}
            </Text>
          </View>

          {/* Benefits of Exercise 1 */}
          <Text className={`text-base text-gray-800 mt-4 mb-2 ${textAlign}`}>
            {t("sportKegelEx1Benefits")}
          </Text>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelEx1Benefits1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelEx1Benefits2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportKegelEx1Benefits3")}
            </Text>
          </View>

          {/* Exercise 2 */}
          <Text
            className={`text-base font-semibold text-gray-800 mt-5 ${pad2} ${textAlign}`}
          >
            2- {t("sportKegelEx2Title")}
          </Text>
          <View className="flex-1 items-center h-69 my-2">
            <Image
              source={images.keigel3Img}
              resizeMode="contain"
              className="h-67.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx2Point1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx2Point2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx2Point3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx2Point4")}
            </Text>
          </View>
          <Text
            className={`text-base text-green-600 mt-4 mb-2 ${pad2} ${textAlign}`}
          >
            {"\u2714"} {t("sportKegelEx2Benefits")}
          </Text>

          {/* Exercise 3 */}
          <Text
            className={`text-base font-semibold text-gray-800 mt-5 ${pad2} ${textAlign}`}
          >
            3- {t("sportKegelEx3Title")}
          </Text>
          <View className="flex-1 items-center h-69 my-4">
            <Image
              source={images.keigel4Img}
              resizeMode="contain"
              className="h-67.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx3Point1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx3Point2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx3Point3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx3Point4")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx3Point5")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx3Point6")}
            </Text>
          </View>
          <Text
            className={`text-base text-green-600 mt-4 mb-2 ${pad2} ${textAlign}`}
          >
            {"\u2714"} {t("sportKegelEx3Benefits")}
          </Text>

          {/* Exercise 4 */}
          <Text
            className={`text-base font-semibold text-gray-800 mt-5 ${pad2} ${textAlign}`}
          >
            4- {t("sportKegelEx4Title")}
          </Text>
          <View className="flex-1 items-center h-69 my-2">
            <Image
              source={images.keigel5Img}
              resizeMode="contain"
              className="h-67.5 w-87.5"
            />
          </View>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("sportKegelEx4Intro")}
          </Text>
          <Text className={`${pad2} text-base text-green-600 ${textAlign}`}>
            {"\u2714"} {t("sportKegelEx4Benefits1")}
          </Text>
          <Text className={`${pad2} text-base text-green-600 ${textAlign}`}>
            {"\u2714"} {t("sportKegelEx4Benefits2")}
          </Text>
          <View className={`space-y-2 mt-4 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx4Point1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx4Point2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx4Point3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx4Point4")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportKegelEx4Point5")}
            </Text>
          </View>

          <Text className={`text-base italic text-gray-500 mt-2 ${textAlign}`}>
            {t("sportKegelNote")}
          </Text>
          <Text className={`text-base italic text-gray-500 mt-2 ${textAlign}`}>
            {t("sportKegelEx4Note")}
          </Text>

          {/* Butterfly Section */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-4 mb-3 ${textAlign}`}
          >
            {"\u2022"} {t("sportButterflyTitle")}
          </Text>
          <View className="flex-1 items-center h-69 my-2">
            <Image
              source={images.keigel6Img}
              resizeMode="contain"
              className="h-67.5 w-87.5"
            />
          </View>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("sportButterflyIntro")}
          </Text>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportButterflyBenefits1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportButterflyBenefits2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportButterflyBenefits3")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportButterflyBenefits4")}
            </Text>
          </View>
          <Text className={`text-base text-gray-700 mt-4 mb-2 ${textAlign}`}>
            {t("sportButterflyHow")}
          </Text>
          <View className={`space-y-2 ${pad3}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportButterflyPoint1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportButterflyPoint2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportButterflyPoint3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportButterflyPoint4")}
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SportKeigel;
