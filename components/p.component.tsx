import { colors, sizes, TEXT } from "@/constants";
import { typo } from "@/style";
import { Text } from "react-native";

export default function P({text, children, color, size, lineHeight, style, align, family, ...otherProps}: TEXT) {
  const scheme = 'light'
  const textStyle = {
    ...typo.txt,
    color: colors[scheme][color || 'text'],
    fontSize: sizes[size || 'xs'],
    lineHeight: sizes[size || 'xs'] * 1.5,
    textAlign: align || 'left',
    fontFamily: family,
    ...style
  }

  return (
    <Text {...otherProps} style={textStyle}>{text || children}</Text>
  )
}