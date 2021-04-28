import { USER_INPUT } from "./constants";

export const inputReducer = (state={} , action) => {
    switch(action.type){
        case USER_INPUT:
            return {
                ...state,
                userString: action.payload
            }
        
        default:
            return state;
    }
    
}