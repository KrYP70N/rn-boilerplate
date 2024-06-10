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
    padding: sizes.xs - 1, 
    borderColor: colors.light.text,
    backgroundColor: colors.light.light,
    borderWidth: 1
  },
  card: {
    width: '100%',
    padding: sizes.xxs
  },
  tableHeader: {
    backgroundColor: colors.light.primary, 
    marginBottom: sizes.xxs / 2, 
    borderRadius: 6
  },
  tableHeaderCell: {
    padding: sizes.lg / 2
  }
})
