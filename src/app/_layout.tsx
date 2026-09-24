import "@/../global.css";
import { ClerkProvider, useAuth } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { loadSavedLanguage } from "../../lang/i18n";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

function AuthNavigation() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (!isLoaded) return;

    const firstSegment = segments[0];
    const isAuthRoute = firstSegment === "(auth)";
    const isPrivateRoute =
      firstSegment === "(tabs)" || firstSegment === "(preparation)";

    if (isSignedIn && (isAuthRoute || firstSegment === "onboarding")) {
      router.replace("/(tabs)");
    } else if (!isSignedIn && isPrivateRoute) {
      router.replace("/(auth)/sign-in");
    }
  }, [isLoaded, isSignedIn, segments]);

  return (
    <Stack initialRouteName="onboarding">
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(preparation)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  const [languageLoaded, setLanguageLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    "sans-regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    loadSavedLanguage().finally(() => setLanguageLoaded(true));
  }, []);

  useEffect(() => {
    if (fontsLoaded && languageLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, languageLoaded]);

  if (!publishableKey) {
    throw new Error(
      "Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY. Add it to the project environment before starting the app.",
    );
  }

  if (!fontsLoaded || !languageLoaded) return null;

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <AuthNavigation />
    </ClerkProvider>
  );
}
