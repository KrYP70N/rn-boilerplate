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
    backgroundColor: colors.info.thead, 
    marginBottom: sizes.xxs / 2, 
    borderRadius: 6
  },
  tableCell: {
    padding: sizes.lg / 2
  },
  tableRow: {
    backgroundColor: colors.light.light,
    marginBottom: sizes.xxs / 2,
    borderRadius: 6
  },
  bananaIcn: {
    position: 'absolute',
    width: 18,
    height: 18,
    top: -2,
    left: 5
  },
  bananaContainer: {
    position: 'relative'
  },
  bananaCount: {
    position: 'absolute',
    top: -2,
    left: 30,
    fontFamily: 'title'
  }
})
