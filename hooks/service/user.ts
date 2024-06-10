import { users } from "@/constants/data"

export const useGetUser = (count: number = 10) => {
  const data = Object.values(users)
  data.sort((a, b) => b.bananas - a.bananas)
  const dataList = data.slice(0, count).map((item, id) => ({...item, rank: id + 1}))
  return dataList
}