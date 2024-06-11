import { colors, INPUT, sizes } from "@/constants";
import { general } from "@/style";
import { TextInput } from "react-native";

export default function Input({placeholder, radius, change}: INPUT) {

  const buttonStyle = {
    ...general.input,
    height: 45,
    borderRadius: (sizes[radius || 'empty']) / 2
  }

  return (
    <>
      <TextInput onChangeText={change} style={buttonStyle} placeholder={placeholder} placeholderTextColor={colors.light.placeholder} />
    </>
  )
}