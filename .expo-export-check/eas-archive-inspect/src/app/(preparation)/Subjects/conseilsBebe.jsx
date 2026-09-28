import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const conseilsBebe = () => {
  const { t, i18n } = useTranslation();
  const { languageData } = useLanguage();

  const conseil1Ar =
    languageData === "ar" ? images.conseils1ArImg : images.conseils1Img;
  const conseil2Ar =
    languageData === "ar" ? images.conseils2ArImg : images.conseils2Img;
  const conseil3Ar =
    languageData === "ar" ? images.conseils3ArImg : images.conseils3Img;
  const conseil4Ar =
    languageData === "ar" ? images.conseils4ArImg : images.conseils4Img;
  const alimentationBebeAr =
    languageData === "ar"
      ? images.alimentationBebeArImg
      : images.alimentationBebeImg;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="px-5 py-6">
          <View
            className={`flex-row items-center mb-10 ${languageData === "ar" ? "flex-row-reverse" : ""}`}
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
              {t("apresAccouchement.conseilsNourrisson.title")}
            </Text>
          </View>

          <View
            className={`flex-wrap justify-between gap-y-4 ${languageData === "ar" ? "flex-row-reverse" : "flex-row"}`}
          >
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/conseils1")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={conseil1Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/conseils2")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={conseil2Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/conseils3")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={conseil3Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/conseils4")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={conseil4Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/alimentationBebe")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={alimentationBebeAr}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default conseilsBebe;
