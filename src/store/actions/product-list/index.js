//agar hum function ka use karate hai action create karane ke liye to function action create ka hete hai this function return plan object return in isde type key redux er function verify type based update state

import * as actions from "../../constants/product-list"

export const updateLoader = (value) => {
    return{
       type: actions.UPDATE_LOADER,
       value,
    }
    
}

export const updateError = (value) => {
    return{
        type: actions.UPDATE_ERROR,
        value,
     }
}

export const updateData = (value) => {
    return{
        type: actions.UPDATE_DATA,
        value,
     }
}

