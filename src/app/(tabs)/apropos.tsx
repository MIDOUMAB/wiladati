import { styled } from "nativewind";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, TextStyle, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useAppDirection } from "../../hooks/use-app-direction";

const SafeAreaView = styled(RNSafeAreaView);

const Bullet = ({
  children,
  style,
}: {
  children: string;
  style: TextStyle;
}) => (
  <Text className="text-base leading-relaxed text-gray-600" style={style}>
    {"\u2022"} {children}
  </Text>
);

export default function Apropos() {
  const { t } = useTranslation();
  const direction = useAppDirection();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="space-y-4 px-5 py-6">
          <View className="mb-4 items-center">
            <Text
              className="text-3xl font-extrabold tracking-wide text-[#6A0DAD]"
              style={direction.text}
            >
              {t("appName")}
            </Text>
          </View>
          <Text
            className="mb-2 text-2xl font-bold text-[#1E3A8A]"
            style={direction.text}
          >
            {t("aProposTitle")}
          </Text>
          <Text
            className="text-base leading-relaxed text-gray-700"
            style={direction.text}
          >
            {t("aProposIntro")}
          </Text>
          <Text
            className="text-base leading-relaxed text-gray-700"
            style={direction.text}
          >
            {t("aProposIntro2")}
          </Text>
          <Text
            className="text-base leading-relaxed text-gray-700"
            style={direction.text}
          >
            {t("aProposIntro3")}
          </Text>
          <View className="space-y-2">
            <Bullet style={direction.text}>{t("aProposIntro3Pt1")}</Bullet>
            <Bullet style={direction.text}>{t("aProposIntro3Pt2")}</Bullet>
          </View>
          <Text
            className="mt-4 text-base italic leading-relaxed text-gray-500"
            style={direction.text}
          >
            {t("aProposNote")}
          </Text>
          <Text
            className="mt-6 mb-2 text-xl font-semibold text-[#1E3A8A]"
            style={direction.text}
          >
            {t("aProposGoal")}
          </Text>
          <View className="space-y-2">
            <Bullet style={direction.text}>{t("aProposPoint1")}</Bullet>
            <Bullet style={direction.text}>{t("aProposPoint2")}</Bullet>
            <Bullet style={direction.text}>{t("aProposPoint3")}</Bullet>
            <Bullet style={direction.text}>{t("aProposPoint4")}</Bullet>
          </View>
          <View className="mt-5 items-center">
            <Text
              className="mb-3 text-2xl font-extrabold tracking-wide text-[#6A0DAD]"
              style={direction.text}
            >
              {t("Equipe")}
            </Text>
            <Text className="text-center text-base font-semibold text-gray-700">
              {t("EquipeConception")}
            </Text>
            <Text className="mb-3 text-center text-xl font-semibold text-[#1E3A8A]">
              {t("EquipeConceptionNom")}
            </Text>
            <Text className="text-center text-base font-semibold text-gray-700">
              {t("EquipeDéveloppement")}
            </Text>
            <Text className="mb-3 text-center text-xl font-semibold text-[#1E3A8A]">
              {t("EquipeDéveloppementNom")}
            </Text>
            <Text className="text-center text-base font-semibold text-gray-700">
              {t("EquipeProposition")}
            </Text>
            <Text className="text-center text-xl font-semibold text-[#1E3A8A]">
              {t("EquipePropositionNom")}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
