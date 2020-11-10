import { ADD_DATA,REMOVE_DATA } from './ActionTypes';
export const AddData = (datatype,datavalue)  => {
    const action={
        type:ADD_DATA,
        datatype,datavalue
    }
    console.log(action)
        return action;     
    }

    export const RemoveData = (id)  => {
        const action={
            type:REMOVE_DATA,
           id
        }
        console.log(action)
            return action;
        }
    