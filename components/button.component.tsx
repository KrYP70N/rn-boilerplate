import { TouchableOpacity, View } from "react-native";
import P from "./p.component";
import { BUTTON, colors, sizes } from "@/constants";

export default function Button({children, press, text, size, style, radius, ...props}: BUTTON) {

  const buttonStyle = {
    ...style,
    backgroundColor: colors['dark'].primary,
    padding: sizes['xxs'],
    borderRadius: (radius ? sizes[radius] : 0) / 2
  }

  return (
    <TouchableOpacity onPress={press} {...props}>
      <View style={buttonStyle}>
        {
          text ?
          <P text={text} {...props}/> : 
          children
        }
      </View>
    </TouchableOpacity>
  )
}