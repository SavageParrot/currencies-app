import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Stack>
          <Stack.Screen name="currenciesScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="countryDetailsScreen"
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

