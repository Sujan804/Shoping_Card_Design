import { ADD_PRODUCT } from "./actionType"

const addProduct = (product)=>{
    return {
        type:ADD_PRODUCT,
        payload: product
    }
}
export { addProduct }

