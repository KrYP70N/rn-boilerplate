// func
export type PROMISE_CB = () => Promise<any>
export type PROMISE_VOID = Promise<void>

// others
export type TEST = {
  testData: number,
  change: (data: number) => void
  changeProm: (process: PROMISE_CB) => PROMISE_VOID
}

