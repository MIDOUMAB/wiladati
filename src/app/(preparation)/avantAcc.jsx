import images from "@/../constants/images";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import Subject from "../../../components/Subject";
import { icons } from "../../../constants/icons";
import { useAppDirection } from "../../hooks/use-app-direction";
const SafeAreaView = styled(RNSafeAreaView);

const avantAcc = () => {
  const { t } = useTranslation();
  const direction = useAppDirection();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        className="w-full flex-1 px-5 pt-3 pb-10 "
      >
        <View className="flex-row items-center mb-6">
          <Pressable
            className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center shadow-sm"
            onPress={() => router.push("/create")}
          >
            <Image
              source={icons.leftArrow}
              resizeMode="contain"
              tintColor="#374151"
              className="w-5 h-5"
              // style={
              //   languageData === "ar" ? { transform: [{ scaleX: -1 }] } : {}
              // }
            />
          </Pressable>
          <Text
            className="mb-2 text-3xl font-sans-bold text-[#081126]"
            style={direction.text}
          >
            {t("avantAccouchTitle")}
          </Text>
        </View>

        {/* Intro */}
        <Text className="text-base text-gray-700 mb-5 " style={direction.text}>
          {t("avantAccouchIntro")}
        </Text>
        <View className="flex-1 gap-y-2 w-full">
          <Text className="text-xl font-extrabold text-[#1E3A8A] ml-35 mb-5">
            1- {t("avantAccouchMentale")}
          </Text>
          <View className="gap-y-4">
            <Subject
              number="01"
              title={t("avantAccouchFear")}
              description={t("avantAccouchFear")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.laPeurImg}
              backgroundColor="#D9EDE5"
              accentColor="#FFFF00"
            />
            <Subject
              number="02"
              title={t("avantAccouchRelaxation")}
              description={t("avantAccouchRelaxation")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.relaxetRespireImg}
              backgroundColor="#F3E2C7"
              accentColor="#FFFF00"
            />
            <Subject
              number="03"
              title={t("avantAccouchPartenaire")}
              description={t("avantAccouchPartenaire")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.partenaireImg}
              backgroundColor="#E8DCEB"
              accentColor="#FFFF00"
            />
          </View>

          <Text className="text-xl font-extrabold text-[#1E3A8A] ml-35 mb-5 ">
            2- {t("avantAccouchPhysique")}
          </Text>
          <View className="gap-y-4">
            <Subject
              number="01"
              title={t("avantAccouchFood")}
              description={t("avantAccouchFood")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.alimentationImg}
              backgroundColor="#D9EDE5"
              accentColor="#FFFF00"
            />
            <Subject
              number="02"
              title={t("sportTitle")}
              description={t("avantAccouchSport")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.sport1Img}
              backgroundColor="#F3E2C7"
              accentColor="#FFFF00"
            />
            <Subject
              number="03"
              title={t("sportKeigelTitle")}
              description={t("avantAccouchSport")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.sport2Img}
              backgroundColor="#E8DCEB"
              accentColor="#FFFF00"
            />
            <Subject
              number="04"
              title={t("avantAccouchMassage")}
              description={t("avantAccouchMassage")}
              handlePress={() => router.push("/")}
              isLoading={false}
              isRTL={direction.isRTL}
              source={images.massagePerineeImg}
              backgroundColor="#E8DCEB"
              accentColor="#FFFF00"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default avantAcc;
