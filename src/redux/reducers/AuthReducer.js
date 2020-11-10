
import {LOGIN, LOGOUT} from '../actions/ActionTypes'
const initialState={ 
    isAuth:false
}

const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{...state,isAuth:true }
        
    
        case LOGOUT:
            return{...state,isAuth:false}
            
        default:
            return {...state}    
}}
export default AuthReducer;
