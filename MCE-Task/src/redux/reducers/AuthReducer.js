import { LOGIN, LOGOUT } from "../actions/ActionTypes";
const initialState = {
  isAuth: false,
  userdata: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        userdata: action.payload,
        id: Math.random(),
      };

    case LOGOUT:
      return { ...state, isAuth: false, userdata: {} };

    default:
      return { ...state };
  }
};
export default AuthReducer;
