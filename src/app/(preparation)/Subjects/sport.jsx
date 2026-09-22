import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Sport = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const textAlign = languageData === "ar" ? "text-right" : "text-left";
  const ball4Image =
    languageData === "ar" ? images.ball44ArImg : images.ball44Img;
  const ball5Image =
    languageData === "ar" ? images.ball5ArImg : images.ball5Img;
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
              {t("sportTitle")}
            </Text>
          </View>

          {/* Intro */}
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}
          >
            {t("sportIntro1")}
          </Text>
          <Text
            className={`text-base leading-relaxed text-gray-800 mb-4 ${textAlign}`}
          >
            {t("sportIntro2")}
          </Text>

          {/* Walk Section */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mb-2 ${textAlign}`}
          >
            1- {t("sportWalkTitle")}
          </Text>
          <View className="flex-1 items-center h-54 my-2">
            <Image
              source={images.marcheImg}
              resizeMode="contain"
              className="h-full w-87.5"
            />
          </View>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("sportWalkIntro")}
          </Text>
          <View className={`space-y-2 ${pad2}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportWalkPoint1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportWalkPoint2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportWalkPoint3")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportWalkPoint4")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportWalkPoint5")}
            </Text>
          </View>

          {/* Swim Section */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-4 mb-3 ${textAlign}`}
          >
            2- {t("sportSwimTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("sportSwimIntro")}
          </Text>
          <View className={`space-y-2 ${pad2}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportSwimPoint1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportSwimPoint2")}
            </Text>
          </View>

          {/* Squats Section */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            3- {t("sportSquatsTitle")}
          </Text>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("sportSquatsIntro")}
          </Text>
          <View className="flex-1 items-center h-54 my-2">
            <Image
              source={images.squatImg}
              resizeMode="contain"
              className="h-full w-95"
            />
          </View>
          <View className={`space-y-2 ${pad2}`}>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportSquatsPoint1")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportSquatsPoint2")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportSquatsPoint3")}
            </Text>
            <Text className={`text-base text-gray-600 ${textAlign}`}>
              {"\u25E6"} {t("sportSquatsPoint4")}
            </Text>
          </View>

          {/* Ball Section */}
          <Text
            className={`text-lg font-semibold text-[#1E3A8A] mt-6 mb-3 ${textAlign}`}
          >
            4- {t("sportBallTitle")}
          </Text>
          <View className="flex-1 items-center h-50 my-2">
            <Image
              source={images.ballImg}
              resizeMode="contain"
              className="h-50 w-87.5"
            />
          </View>
          <Text className={`text-base text-gray-800 mb-2 ${textAlign}`}>
            {t("sportBallIntro")}
          </Text>
          <View className={`space-y-2 mb-6 ${pad2}`}>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportBallPoint1")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportBallPoint2")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportBallPoint3")}
            </Text>
            <Text className={`text-base text-green-600 ${textAlign}`}>
              {"\u2714"} {t("sportBallPoint4")}
            </Text>
          </View>

          <Text
            className={`text-lg font-semibold text-gray-800 mb-2 ${pad2} ${textAlign}`}
          >
            {t("sportBallExample")}
          </Text>

          <Text className={`text-lg text-[#1E3A8A] mb-2 ${pad3} ${textAlign}`}>
            {"\u2022"} {t("sportBallEx1Title")}
          </Text>
          <View className="flex-1 items-center h-57.5 my-2">
            <Image
              source={ball4Image}
              resizeMode="contain"
              className="h-57.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 mb-5 ${pad6}`}>
            <Text className={`text-base text-grey-600 ${textAlign}`}>
              {"\u25E6"} {t("sportBallEx1Point4")}
            </Text>
          </View>

          <Text className={`text-lg text-[#1E3A8A] mb-2 ${pad3} ${textAlign}`}>
            {"\u2022"} {t("sportBallEx2Title")}
          </Text>
          <View className="flex-1 items-center h-55 my-2">
            <Image
              source={ball5Image}
              resizeMode="contain"
              className="h-50 w-87.5"
            />
          </View>

          <Text className={`text-lg text-[#1E3A8A] mb-2 ${pad3} ${textAlign}`}>
            {"\u2022"} {t("sportBallEx3Title")}
          </Text>
          <View className="flex-1 items-center h-62.5 my-2">
            <Image
              source={images.ball3Img}
              resizeMode="contain"
              className="h-62.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 mb-5 ${pad6}`}>
            <Text className={`text-base text-grey-600 ${textAlign}`}>
              {"\u25E6"} {t("sportBallEx3Point1")}
            </Text>
            <Text className={`text-base text-grey-600 ${textAlign}`}>
              {"\u25E6"} {t("sportBallEx3Point2")}
            </Text>
          </View>

          <Text className={`text-lg text-[#1E3A8A] mb-2 ${pad3} ${textAlign}`}>
            {"\u2022"} {t("sportSquatsBallTitle")}
          </Text>
          <View className="flex-1 items-center h-62.5 my-2">
            <Image
              source={images.ball4Img}
              resizeMode="contain"
              className="h-67.5 w-87.5"
            />
          </View>
          <View className={`space-y-2 mb-5 ${pad6}`}>
            <Text className={`text-base text-grey-600 ${textAlign}`}>
              {"\u25E6"} {t("sportSquatsBallEx1")}
            </Text>
            <Text className={`text-base text-grey-600 ${textAlign}`}>
              {"\u25E6"} {t("sportSquatsBallEx2")}
            </Text>
          </View>

          <Text
            className={`text-lg font-semibold text-gray-800 mb-2 ${pad2} ${textAlign}`}
          >
            {t("sportSquatsBallAstuce")}
          </Text>
          <View className={`space-y-2 mb-5 ${pad3}`}>
            <Text className={`text-base text-grey-600 ${textAlign}`}>
              {t("sportSquatsBallAstuceIntro")}
            </Text>
          </View>
          <View className="flex-1 items-center h-50 my-2">
            <Image
              source={images.ballAsImg}
              resizeMode="contain"
              className="h-60 w-87.5"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Sport;
