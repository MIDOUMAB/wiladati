import { router } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import Subject from "../../../components/Subject";
import images from "../../../constants/images";
import { useAppDirection } from "../../hooks/use-app-direction";
const SafeAreaView = styled(RNSafeAreaView);

const Preparation = () => {
  const { t } = useTranslation();
  const direction = useAppDirection();
  return (
    <SafeAreaView className="flex-1 bg-[#F7FBF9]">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-5 py-6">
          <Text
            className="mb-2 text-3xl font-sans-bold text-[#081126]"
            style={direction.text}
          >
            {t("appTab2")}
          </Text>
          <Text
            className="mb-6 text-base font-sans-medium leading-6 text-[#60756F]"
            style={direction.text}
          >
            {t("preparationIntro")}
          </Text>
          <View className="gap-y-4">
            <Subject
              number="01"
              title={t("prepBeforeTitle")}
              description={t("prepBeforeDescription")}
              handlePress={() => router.push("/avantAcc")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.avantImage}
              backgroundColor="#D9EDE5"
              accentColor="#FFFF00"
            />
            <Subject
              number="02"
              title={t("prepDuringTitle")}
              description={t("prepDuringDescription")}
              handlePress={() => router.push("/pendantAcc")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.pendantImage}
              backgroundColor="#F3E2C7"
              accentColor="#EA7A53"
            />
            <Subject
              number="03"
              title={t("prepAfterTitle")}
              description={t("prepAfterDescription")}
              handlePress={() => router.push("/apresAcc")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.apresImage}
              backgroundColor="#E8DCEB"
              accentColor="#2EBB22"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Preparation;
