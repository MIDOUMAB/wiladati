import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
const SafeAreaView = styled(RNSafeAreaView);

const Guide = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t("appTab3")}</Text>
    </SafeAreaView>
  );
};

export default Guide;
