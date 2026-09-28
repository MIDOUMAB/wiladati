import { icons } from "@/../constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const natation = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full flex-1 justify-start items-start px-2 pb-2 ">
          <View className="relative mt-2 mb-5 px-2">
            <Pressable
              className="bg-gray-200 w-7 py-1"
              onPress={() => router.push("/avantAcc")}
            >
              <Image
                source={icons.leftArrow}
                resizeMode="contain"
                tintColor={"#210255"}
                className="w-5 h-5 mb-2"
              />
            </Pressable>
            <Text className="text-2xl text-blueColor font-bold text-left mb-5">
              Natation
            </Text>
            <View>
              <Text className="text-base font-pmedium text-left">
                C'est une réaction courante et naturelle, en particulier chez
                les femmes qui vivent cette expérience pour la première fois.
                Cette peur est due à l'inquiétude liée à la douleur ou à
                l'inconnu .
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default natation;
