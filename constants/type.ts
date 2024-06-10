import { ReactNode } from "react"
import colors from "./colors"
import size from "./sizes"

// ui
export type COLOR_SCHEME = keyof typeof colors.dark

export type SIZE = keyof typeof size

export type ALIGNMENT = 'auto' | 'left' | 'right' | 'center' | 'justify'

export type TEXT = {
  children?: ReactNode, 
  text?: string,
  color?: COLOR_SCHEME,
  size?: SIZE,
  lineHeight?: number,
  style?: object,
  align?: ALIGNMENT
}

export interface BUTTON extends TEXT {
  press?: () => void,
  radius?: SIZE
}

export type GRID_CONTEXT = {
  context: ReactNode,
  width: number,
  margin: number,
  odd?: boolean
}

export type GRID = {
  col: number,
  gap?: SIZE,
  children: ReactNode
}

export type INPUT = {
  placeholder?: string,
  radius?: SIZE
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

