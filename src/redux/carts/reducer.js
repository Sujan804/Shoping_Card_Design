import { ADD_CART, DECREMENT_CART, DELETE_CART, INCREMENT_CART } from './actionType';
import initialState from './initialState';

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_CART:
            return [
                ...state, action.payload
            ]
        case DELETE_CART:
            const updatedCarts = state.filter((cart)=> cart.id !== action.payload)
            return [...updatedCarts]
        case INCREMENT_CART:
            const newCarts = state.map((cart)=>{
                if(cart.id===action.payload){
                    cart.quantity += 1;
                    return cart;
                }else{
                    return cart;
                }
            })
            return [...newCarts]
            case DECREMENT_CART:
                const newCarts1 = state.map((cart)=>{
                    if(cart.id===action.payload){
                        if(cart.quantity>0){
                            cart.quantity -= 1
                        }
                        return cart;
                    }else{
                        return cart;
                    }
                })
                return [...newCarts1]
        default:
            return [...state]
    }
}
export default reducer;
