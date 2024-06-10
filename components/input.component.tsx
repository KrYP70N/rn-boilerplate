import { colors, INPUT, sizes } from "@/constants";
import { general } from "@/style";
import { TextInput } from "react-native";

export default function Input({placeholder, radius}: INPUT) {

  const buttonStyle = {
    ...general.input,
    borderRadius: (sizes[radius || 'empty']) / 2
  }

  return (
    <>
      <TextInput style={buttonStyle} placeholder={placeholder} placeholderTextColor={colors.light.placeholder} />
    </>
  )
}