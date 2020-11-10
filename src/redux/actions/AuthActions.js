import { LOGIN, LOGOUT } from './ActionTypes';
import  { Redirect } from 'react-router-dom'
export const Login = (userdata) =>  dispatch => {
    //axios Call
              dispatch({ type: LOGIN });

    }
    export const Logout = () =>  dispatch => {
            //axios Call
        dispatch({ type: LOGOUT });
    }
