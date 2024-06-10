import { colors, sizes } from "@/constants";
import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  screen: {
    height: '100%',
    flex: 1,
    padding: 12,
    backgroundColor: colors.light.primary
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.background
  },
  scroll: {
    backgroundColor: colors.light.primary,
    padding: sizes.xxs
  }
})