import { ReactNode } from "react"
import colors from "./colors"
import size from "./sizes"
import fonts from "./fonts"

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
  align?: ALIGNMENT,
  family?: keyof typeof fonts
}

export interface BUTTON extends TEXT {
  press?: () => void,
  radius?: SIZE,
  background?: keyof typeof colors.info
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
  style?: object,
  children: ReactNode
}

export type INPUT = {
  placeholder?: string,
  radius?: SIZE,
  change?: (e: string) => void
}

export type CARD = {
  children: ReactNode,
  background?: COLOR_SCHEME,
  radius?: SIZE,
  style?: object
}

export type TABLE_TITLE_CELL = {
  key: string,
  display?: string,
  flex?: number
}

export type TABLE = {
  title?: TABLE_TITLE_CELL[],
  data: object[]
}

export type CONDITIONAL_COMPONENT = {
  state: boolean | undefined | null,
  children: ReactNode
}

// func
export type PROMISE_CB = () => Promise<any>
export type PROMISE_VOID = Promise<void>

// others

export type USER_ORDER = 'ASC' | 'DSC' | 'FUZ'

export type TEST = {
  testData: number,
  change: (data: number) => void
  changeProm: (process: PROMISE_CB) => PROMISE_VOID
}
