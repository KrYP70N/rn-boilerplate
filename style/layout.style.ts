import { colors } from "@/constants";
import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    padding: 12,
    backgroundColor: colors.light.background
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.background
  }
})