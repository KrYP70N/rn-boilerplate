import { useGetUser } from "@/hooks/service/user";

export const GET_USERS = 'GET_USERS';

export const getUser = async (data: number) => ({
  type: GET_USERS,
  paylod: () => useGetUser(data)
});
