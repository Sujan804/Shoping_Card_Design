import { ADD_PRODUCT } from "./actionType";
import initialState from "./initialState";

const reducer =  (state = initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return [
                ...state, action.payload
            ]
        default:
            return [
                ...state
            ]
    }
}
export default reducer