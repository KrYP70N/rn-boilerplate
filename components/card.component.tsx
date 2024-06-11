import { CARD, colors, sizes } from "@/constants";
import { general } from "@/style";
import { View } from "react-native";

export default function Card({children, radius, style}: CARD) {

  const cardStyle = {
    ...general.card,
    backgroundColor: 'rgba(255, 255, 255, .75)',
    borderRadius: sizes[radius || 'empty'],
    ...style
  }

  return (
    <View style={cardStyle}>
      {children}
    </View>
  )
}