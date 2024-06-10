import { colors, sizes } from "@/constants";
import { StyleSheet } from "react-native";

export const general = StyleSheet.create({
  loadingImage: {
    width: 300,
    height: 70,
    resizeMode: 'contain'
  },
  input: {
    width: '100%', 
    padding: sizes.xs - 2, 
    borderColor: colors.light.primary,
    borderWidth: 1
  }
})
