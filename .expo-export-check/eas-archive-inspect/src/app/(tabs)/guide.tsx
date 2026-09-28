import images from "@/../constants/images";
import { useLanguage } from "@/hooks/use-language";
import { router } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useAppDirection } from "../../hooks/use-app-direction";
const SafeAreaView = styled(RNSafeAreaView);

const Guide = () => {
  const { t } = useTranslation();
  const direction = useAppDirection();
  const { languageData } = useLanguage();

  const alertAr = languageData === "ar" ? images.alertArbImg : images.alertImg;
  const contractionsAr =
    languageData === "ar" ? images.contractionsArbImg : images.contractionsImg;
  const signeAppAr =
    languageData === "ar" ? images.signeAppArbImg : images.signeAppImg;
  const stimulateurs22Ar =
    languageData === "ar"
      ? images.stimulateurs22ArbImg
      : images.stimulateurs22Img;
  const valise2Ar =
    languageData === "ar" ? images.valise2ArbImg : images.valise2Img;
  const weeks2Ar =
    languageData === "ar" ? images.weeks2ArbImg : images.weeks2Img;

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 py-6 space-y-6">
          <View className="flex-row flex-wrap justify-between gap-y-4">
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/weeks")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={weeks2Ar}
                className="h-full w-full self-center"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/signesAlert")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={alertAr}
                className="h-full w-full self-center"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/stimulateur")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={stimulateurs22Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/contractions")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={contractionsAr}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/valise")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={valise2Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => router.push("/Subjects/signesApp")}
              className="w-[48%] h-37.5 bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                source={signeAppAr}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guide;
