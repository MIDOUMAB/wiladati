import { styled } from "nativewind";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const SafeAreaView = styled(RNSafeAreaView);

const Bullet = ({ children }: { children: string }) => (
  <Text className="text-base leading-relaxed text-gray-600">{"\u2022"} {children}</Text>
);

export default function Apropos() {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="space-y-4 px-5 py-6">
          <View className="mb-4 items-center"><Text className="text-3xl font-extrabold tracking-wide text-[#6A0DAD]">{t("appName")}</Text></View>
          <Text className="mb-2 text-2xl font-bold text-[#1E3A8A]">{t("aProposTitle")}</Text>
          <Text className="text-base leading-relaxed text-gray-700">{t("aProposIntro")}</Text>
          <Text className="text-base leading-relaxed text-gray-700">{t("aProposIntro2")}</Text>
          <Text className="text-base leading-relaxed text-gray-700">{t("aProposIntro3")}</Text>
          <View className="space-y-2"><Bullet>{t("aProposIntro3Pt1")}</Bullet><Bullet>{t("aProposIntro3Pt2")}</Bullet></View>
          <Text className="mt-4 text-base italic leading-relaxed text-gray-500">{t("aProposNote")}</Text>
          <Text className="mt-6 mb-2 text-xl font-semibold text-[#1E3A8A]">{t("aProposGoal")}</Text>
          <View className="space-y-2">
            <Bullet>{t("aProposPoint1")}</Bullet><Bullet>{t("aProposPoint2")}</Bullet><Bullet>{t("aProposPoint3")}</Bullet><Bullet>{t("aProposPoint4")}</Bullet>
          </View>
          <View className="mt-5 items-center">
            <Text className="mb-3 text-2xl font-extrabold tracking-wide text-[#6A0DAD]">{t("Equipe")}</Text>
            <Text className="text-center text-base font-semibold text-gray-700">{t("EquipeConception")}</Text>
            <Text className="mb-3 text-center text-xl font-semibold text-[#1E3A8A]">{t("EquipeConceptionNom")}</Text>
            <Text className="text-center text-base font-semibold text-gray-700">{t("EquipeDéveloppement")}</Text>
            <Text className="mb-3 text-center text-xl font-semibold text-[#1E3A8A]">{t("EquipeDéveloppementNom")}</Text>
            <Text className="text-center text-base font-semibold text-gray-700">{t("EquipeProposition")}</Text>
            <Text className="text-center text-xl font-semibold text-[#1E3A8A]">{t("EquipePropositionNom")}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
