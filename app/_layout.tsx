import { SafeAreaView, ScrollView,  Text, View } from "react-native";
import { Stack } from "expo-router"
import { colors } from "@/constants";

export default function RootLayout() {
  return (
    <SafeAreaView style={{backgroundColor: colors.light.background}}>
      <ScrollView  contentContainerStyle={{height: '100%'}}>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="index" />
        </Stack>
      </ScrollView>
    </SafeAreaView>
  )
}