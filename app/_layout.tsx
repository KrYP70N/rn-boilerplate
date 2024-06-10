import { SafeAreaView, ScrollView} from "react-native";
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from 'expo-font'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { layout } from "@/style";
import { useCallback } from "react";
import fonts from "@/constants/fonts";
import reduxStore from "@/store/redux/store.config";

const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [fontsLoaded, fontsError] = useFonts(fonts)

  const layoutCtrl = useCallback(async () => {
    if(fontsLoaded || fontsError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontsError])

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={layout.screen} onLayout={layoutCtrl}>
            <Stack screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="index" />
            </Stack>
        </SafeAreaView>
      </QueryClientProvider>
    </Provider>
  )
}
