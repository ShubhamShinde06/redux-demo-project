
import * as actions from "../../constants/cart"

export const addToCart = (value) => {
    return{
        type: actions.UPDATE_CART,
        value,
     }
}

export const removeToCart = (value) => {
    return{
        type: actions.REMOVE_CART,
        value,
     }
}