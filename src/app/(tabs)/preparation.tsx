import { styled } from "nativewind";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import apresImage from "../../../assets/images/apres.png";
import avantImage from "../../../assets/images/avant.png";
import pendantImage from "../../../assets/images/pendant.png";
import Subject from "../../../components/Subject";
const SafeAreaView = styled(RNSafeAreaView);

const Preparation = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F7FBF9]">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-5 py-6">
          <Text className="mb-2 text-3xl font-sans-bold text-[#081126]">
            Preparation
          </Text>
          <Text className="mb-6 text-base font-sans-medium leading-6 text-[#60756F]">
            Find guidance for every step of your journey.
          </Text>
          <View className="gap-y-4">
            <Subject
              number="01"
              title="Before pregnancy"
              description="Prepare your body and mind"
              source={avantImage}
              backgroundColor="#D9EDE5"
              accentColor="#FFFF00"
            />
            <Subject
              number="02"
              title="During pregnancy"
              description="Feel supported, week by week"
              source={pendantImage}
              backgroundColor="#F3E2C7"
              accentColor="#EA7A53"
            />
            <Subject
              number="03"
              title="After pregnancy"
              description="Care for yourself and your baby"
              source={apresImage}
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
