import { GET_USERS } from "../action/user.action";

const initialState = {
  data: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, data: action.payload()};
    default:
      return state;
  }
};

export default userReducer;
