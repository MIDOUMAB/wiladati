import { icons, images } from "@/../constants";
import { useLanguage } from "@/hooks/use-language";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const weekImages = [
  images.week1Img,
  images.week2Img,
  images.week3Img,
  images.week4Img,
  images.week5Img,
  images.week6Img,
  images.week7Img,
  images.week8Img,
  images.week9Img,
  images.week10Img,
  images.week11Img,
  images.week12Img,
  images.week13Img,
  images.week14Img,
  images.week15Img,
  images.week16Img,
  images.week17Img,
  images.week18Img,
  images.week19Img,
  images.week20Img,
  images.week21Img,
  images.week22Img,
  images.week23Img,
  images.week24Img,
  images.week25Img,
  images.week26Img,
  images.week27Img,
  images.week28Img,
  images.week29Img,
  images.week30Img,
  images.week31Img,
  images.week32Img,
  images.week33Img,
  images.week34Img,
  images.week35Img,
  images.week36Img,
  images.week37Img,
  images.week38Img,
  images.week39Img,
  images.week40Img,
  images.week41Img,
  images.week42Img,
];

const Weeks = () => {
  const { t } = useTranslation();
  const { languageData } = useLanguage();
  const { week } = useLocalSearchParams();
  const isRTL = languageData === "ar";
  const [selectedWeek, setSelectedWeek] = useState(String(week ?? "1"));

  useEffect(() => {
    if (week) {
      setSelectedWeek(String(week));
    }
  }, [week]);

  const weekOptions = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => {
        const value = String(index + 1);
        const label =
          t(`weeks.${value}.label`) ||
          (isRTL ? `الأسبوع ${index + 1}` : `Semaine ${index + 1}`);

        return { value, label };
      }),
    [isRTL, t],
  );

  const selectedInfo = useMemo(() => {
    const value = selectedWeek;
    const title = t(`weeks.${value}.label`) || `Semaine ${value}`;
    const intro = t(`weeks.${value}.intro`, { returnObjects: true }) ?? [];
    const symptoms =
      t(`weeks.${value}.symptomes`, { returnObjects: true }) ?? [];
    const advice = t(`weeks.${value}.conseils`, { returnObjects: true }) ?? [];
    const note = t(`weeks.${value}.note`, { returnObjects: true }) ?? [];

    return { title, intro, symptoms, advice, note };
  }, [selectedWeek, t]);

  const renderList = (items) =>
    items.map((item, index) => (
      <Text
        key={`${item}-${index}`}
        className={`mb-2 text-base leading-6 text-slate-700 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {"\u2022"} {item}
      </Text>
    ));

  return (
    <SafeAreaView className="flex-1 bg-[#F7F3FF]">
      <StatusBar backgroundColor="#F7F3FF" style={isRTL ? "light" : "dark"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="px-5 pb-4 pt-6">
          <View
            className={`mb-6 flex-row items-center ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Pressable
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm shadow-black/10"
            >
              <Image
                source={icons.leftArrow}
                resizeMode="contain"
                className="h-5 w-5"
                style={
                  isRTL
                    ? { tintColor: "#2B1646", transform: [{ scaleX: -1 }] }
                    : { tintColor: "#2B1646" }
                }
              />
            </Pressable>

            <Text
              className={`flex-1 text-2xl font-sans-bold text-[#2B1646] ${
                isRTL ? "mr-3 text-right" : "ml-3 text-left"
              }`}
            >
              {t("weeksTitle")}
            </Text>
          </View>

          <View className="mb-5 rounded-[26px] border border-[#E8DEF6] bg-white p-2 shadow-sm shadow-black/5">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 4, gap: 8 }}
            >
              {weekOptions.map((week) => {
                const selected = week.value === selectedWeek;

                return (
                  <Pressable
                    key={week.value}
                    onPress={() => setSelectedWeek(week.value)}
                    className={`min-w-18 rounded-full border px-3 py-2 ${
                      selected
                        ? "border-[#6A0DAD] bg-[#6A0DAD]"
                        : "border-[#E9DFF7] bg-[#F6F0FF]"
                    }`}
                  >
                    <Text
                      className={`text-center text-sm font-sans-bold ${
                        selected ? "text-white" : "text-[#4C2A74]"
                      }`}
                    >
                      {week.label
                        .replace("Semaine ", "")
                        .replace("الأسبوع ", "")}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          <View className="overflow-hidden rounded-[28px] border border-[#E8DEF6] bg-white shadow-sm shadow-black/5">
            <View className="rounded-t-[28px] bg-[#F1ECFF] px-4 py-4">
              {/* <Text
                className={`text-[11px] font-sans-bold uppercase tracking-[1.8px] text-[#7A58A1] ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("weeksTitle")}
              </Text> */}
              <Text
                className={` text-[26px] font-sans-bold text-[#2B1646] ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {selectedInfo.title}
              </Text>
            </View>

            <View className="p-3">
              <Image
                source={weekImages[Number(selectedWeek) - 1]}
                resizeMode="cover"
                className="h-56 w-full rounded-[22px]"
              />
            </View>

            <View className="px-4 pb-5">
              {/* <Text
                className={`mb-3 text-xl font-sans-bold text-[#8811dc] ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("weeksTitle")}
              </Text> */}

              {Array.isArray(selectedInfo.intro) &&
                selectedInfo.intro.length > 0 &&
                selectedInfo.intro.map((paragraph, index) => (
                  <Text
                    key={`${paragraph}-${index}`}
                    className={`mb-2 text-base leading-6 text-slate-700 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {paragraph}
                  </Text>
                ))}

              {Array.isArray(selectedInfo.symptoms) &&
                selectedInfo.symptoms.length > 0 && (
                  <>
                    <Text
                      className={`mt-5 mb-2 text-xl font-sans-bold text-[#8811dc] ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("weeksSymptomes")}
                    </Text>
                    {renderList(selectedInfo.symptoms)}
                  </>
                )}

              {Array.isArray(selectedInfo.advice) &&
                selectedInfo.advice.length > 0 && (
                  <>
                    <Text
                      className={`mt-5 mb-2 text-xl font-sans-bold text-[#8811dc] ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("weeksConseils")}
                    </Text>
                    {renderList(selectedInfo.advice)}
                  </>
                )}

              {Array.isArray(selectedInfo.note) &&
                selectedInfo.note.length > 0 && (
                  <View className="mt-5 rounded-2xl bg-[#F8F1FF] p-4">
                    <Text
                      className={`mb-2 text-lg font-sans-bold text-[#4C2A74] ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {t("weeksRemarque")}
                    </Text>
                    {renderList(selectedInfo.note)}
                  </View>
                )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Weeks;
