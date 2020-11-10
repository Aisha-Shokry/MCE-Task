import { LOGIN, LOGOUT } from "./ActionTypes";

export const Login = (userdata) => {
  //axios Call

  return {
    type: LOGIN,
    payload: userdata,
  };
};
export const Logout = () => (dispatch) => {
  //axios Call
  dispatch({ type: LOGOUT });
};
