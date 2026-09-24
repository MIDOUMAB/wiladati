import images from "@/../constants/images";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import Subject from "../../../components/Subject";
import { icons } from "../../../constants/icons";
import { useAppDirection } from "../../hooks/use-app-direction";
import { useLanguage } from "../../hooks/use-language";
const SafeAreaView = styled(RNSafeAreaView);

const apresAcc = () => {
  const { t } = useTranslation();
  const direction = useAppDirection();
  const { languageData } = useLanguage();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        className="w-full flex-1 px-5 pt-3 pb-10"
      >
        <View className="flex-row items-center mb-6" style={direction.row}>
          <Pressable
            className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center shadow-sm"
            onPress={() => router.push("/preparation")}
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
            className={`text-3xl font-sans-bold text-[#081126] ${languageData === "ar" ? "mr-2" : "ml-2"}`}
            style={direction.text}
          >
            {t("apresAccouchement.title")}
          </Text>
        </View>

        {/* Intro */}
        {/* <Text className="text-base text-gray-700 mb-5 " style={direction.text}>
            {t("avantAccouchIntro")}
          </Text> */}
        <View className="flex-1 gap-y-4 w-full">
          <Subject
            number="01"
            title={t("apresAccouchement.periodePostpartum.title")}
            description={t("apresAccouchement.periodePostpartum.title")}
            handlePress={() => router.push("/Subjects/periodePostpartum")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.periodPostPartumImg}
            backgroundColor="#D9EDE5"
            accentColor="#2EBB22"
          />
          <Subject
            number="02"
            title={t("apresAccouchement.allaitementMaternel.title")}
            description={t("apresAccouchement.allaitementMaternel.title")}
            handlePress={() => router.push("/Subjects/allaitementMaternel")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.allaitementMaternelImg}
            backgroundColor="#F3E2C7"
            accentColor="#2EBB22"
          />
          <Subject
            number="03"
            title={t("apresAccouchement.hygienePersonnelle.title")}
            description={t("apresAccouchement.hygienePersonnelle.title")}
            handlePress={() => router.push("/Subjects/hygienePersonnelle")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.hygienePersonnelImg}
            backgroundColor="#E8DCEB"
            accentColor="#2EBB22"
          />
          <Subject
            number="04"
            title={t("apresAccouchement.alimentation.1")}
            description={t("apresAccouchement.alimentation.1")}
            handlePress={() => router.push("/Subjects/alimentationApres")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.alimentationApresImg}
            backgroundColor="#D9EDE5"
            accentColor="#2EBB22"
          />
          <Subject
            number="05"
            title={t("apresAccouchement.conseilsNourrisson.title")}
            description={t("apresAccouchement.conseilsNourrisson.title")}
            handlePress={() => router.push("/Subjects/conseilsBebe")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.bebeImg}
            backgroundColor="#F3E2C7"
            accentColor="#2EBB22"
          />
          <Subject
            number="06"
            title={t("apresAccouchement.medicaments.title")}
            description={t("apresAccouchement.medicaments.title")}
            handlePress={() => router.push("/Subjects/medicaments")}
            isLoading={false}
            isRTL={direction.isRTL}
            source={images.medicamentsImg}
            backgroundColor="#E8DCEB"
            accentColor="#2EBB22"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default apresAcc;
