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
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 py-6 space-y-6">
          <View className="flex-row flex-wrap justify-between gap-y-4">
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => router.push("/weeks")}
              className="w-[48%] h-[150px] bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                // source={weeks2Ar}
                className="h-full w-full self-center"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => router.push("/signesAlert")}
              className="w-[48%] h-[150px] bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                // source={alertAr}
                className="h-full w-full self-center"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => router.push("/stimulateur")}
              className="w-[48%] h-[150px] bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                // source={stimulateurs22Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => router.push("/contractions")}
              className="w-[48%] h-[150px] bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                // source={contractionsAr}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => router.push("/valise")}
              className="w-[48%] h-[150px] bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                // source={valise2Ar}
                className="h-full w-full self-center"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.1}
              // onPress={() => router.push("/signesApp")}
              className="w-[48%] h-[150px] bg-white rounded-xl shadow-xl shadow-black-100 overflow-hidden "
            >
              <Image
                // source={signeAppAr}
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
