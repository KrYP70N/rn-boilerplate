import { TEST } from '@/constants/type'
import { create } from 'zustand'

export const useSampleStore = create<TEST>((set) => ({
  testData: 0,
  change: (data) => {
    set((state) => ({
      testData: state.testData + data
    }))
  },
  changeProm: async (process) => {
    const req = await process()
    // your ref
  }
}))