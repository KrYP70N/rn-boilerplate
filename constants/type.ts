import { ReactNode } from "react"
import colors from "./colors"
import size from "./sizes"
import { StyleProp, TextStyle } from "react-native"

// ui
export type COLOR_SCHEME = keyof typeof colors.dark

export type SIZE = keyof typeof size

export type TEXT = {
  children: ReactNode, 
  color?: COLOR_SCHEME,
  size?: SIZE,
  lineHeight?: number,
  style?: object
}

// func
export type PROMISE_CB = () => Promise<any>
export type PROMISE_VOID = Promise<void>

// others
export type TEST = {
  testData: number,
  change: (data: number) => void
  changeProm: (process: PROMISE_CB) => PROMISE_VOID
}

