import { CONDITIONAL_COMPONENT } from "@/constants"

export default function If({state, children}: CONDITIONAL_COMPONENT) {

  if(!state) {
    return null
  }

  return children
}