import { SafeAreaView, ScrollView,  Text, View } from "react-native";
import { Stack } from "expo-router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { colors } from "@/constants";

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{backgroundColor: colors.light.background}}>
        <ScrollView  contentContainerStyle={{height: '100%'}}>
          <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="sub" />
          </Stack>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  )
}