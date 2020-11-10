import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import ProfileReducer from './ProfileReducers';
export default combineReducers({
    isAuAth:AuthReducer,
    Profile:ProfileReducer
})