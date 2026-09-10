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

const pendantAcc = () => {
  const { t } = useTranslation();
  const direction = useAppDirection();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 24 }}
        className="w-full flex-1 px-5 py-6 "
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
            {t("pendantAccouchement.title")}
          </Text>
        </View>

        {/* Intro */}
        {/* <Text className="text-base text-gray-700 mb-5 " style={direction.text}>
            {t("avantAccouchIntro")}
          </Text> */}
        <View className="flex-1 gap-y-4 w-full">
          <Subject
            number="01"
            title={t("pendantAccouchement.gestionPeurAnxiete.title")}
            description={t("pendantAccouchement.gestionPeurAnxiete.title")}
            handlePress={() => router.push("/")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.gestionDePeurImg}
            backgroundColor="#D9EDE5"
            accentColor="#EA7A53"
          />
          <Subject
            number="02"
            title={t("pendantAccouchement.massageRelaxation.title")}
            description={t("pendantAccouchement.massageRelaxation.title")}
            handlePress={() => router.push("/")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.massageEtRelaxationImg}
            backgroundColor="#F3E2C7"
            accentColor="#EA7A53"
          />
          <Subject
            number="03"
            title={t("pendantAccouchement.techniques_respiration.title")}
            description={t("pendantAccouchement.techniques_respiration.title")}
            handlePress={() => router.push("/")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.techniqueDeRespirationImg}
            backgroundColor="#E8DCEB"
            accentColor="#EA7A53"
          />
          <Subject
            number="04"
            title={t("pendantAccouchement.technique_poussee.title")}
            description={t("pendantAccouchement.technique_poussee.title")}
            handlePress={() => router.push("/")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.techniqueDePousseeImg}
            backgroundColor="#D9EDE5"
            accentColor="#EA7A53"
          />
          <Subject
            number="05"
            title={t("pendantAccouchement.role_proches.title")}
            description={t("pendantAccouchement.role_proches.title")}
            handlePress={() => router.push("/")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.roleDesProchesImg}
            backgroundColor="#F3E2C7"
            accentColor="#EA7A53"
          />
          <Subject
            number="06"
            title={t("pendantAccouchement.cesarienne.title")}
            description={t("pendantAccouchement.cesarienne.title")}
            handlePress={() => router.push("/")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.cesarienneImg}
            backgroundColor="#E8DCEB"
            accentColor="#EA7A53"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default pendantAcc;
