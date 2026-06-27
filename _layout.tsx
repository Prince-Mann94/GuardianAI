import { useEffect } from "react";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible until we tell it to hide
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide the splash screen as soon as this root layout component mounts
    SplashScreen.hideAsync().catch(() => {
      /* prevent unhandled promise rejections */
    });
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}