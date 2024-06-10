import { useGetUser } from "@/hooks/service/user";
import { GET_USERS } from "../action/user.action";

interface UserState {
  data: any
}

const initialState: UserState = {
  data: useGetUser(10),
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, data: action.paylod() };
    default:
      return state;
  }
};

export default userReducer;
