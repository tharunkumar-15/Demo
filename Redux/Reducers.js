import {SET_USER} from './Actions'

const initialState={
    user:'123456',  
}

function useReducer(state=initialState,action){
    switch(action.type){
        case SET_USER:
            return {...state,user:action.payload}
        default:
            return state;
    }
}

export default useReducer;