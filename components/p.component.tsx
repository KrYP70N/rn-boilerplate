import { colors, sizes, TEXT } from "@/constants";
import { typo } from "@/style";
import { Text } from "react-native";

export default function P({children, color, size, lineHeight, style, ...otherProps}: TEXT) {
  
  const scheme = 'dark'
  const textStyle = {
    ...typo.txt,
    color: colors[scheme][color || 'text'],
    fontSize: sizes[size || 'xs'],
    lineHeight: sizes[size || 'xs'] * 1.5,
    ...style
  }

  return (
    <Text {...otherProps} style={textStyle}>{children}</Text>
  )
}