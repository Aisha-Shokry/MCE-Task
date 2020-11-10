
import {ADD_DATA,REMOVE_DATA} from '../actions/ActionTypes'
// const initialState=[
// { username:'Aisha'},
//     {email:'ajja@kk.com'},
//    {age:'24'}]

const ProfileReducer=(state=[],action)=>{
    let addedData=[]
    switch(action.type){
        case ADD_DATA:
            addedData=[...state,{datatype:action.datatype,datavalue:action.datavalue ,id:Math.random()}]
            return addedData        
    
case REMOVE_DATA:
    addedData=addedData.filter(data=>data.id !==action.id)
    return addedData
    
        default:
            return {...state}    
}}
export default ProfileReducer;
