import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView>
      <Text>Subscription Details: {id}</Text>
      <Link href="./(tabs)/index" className="mt-4 text-lg text-primary">
        Go Back
      </Link>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;
