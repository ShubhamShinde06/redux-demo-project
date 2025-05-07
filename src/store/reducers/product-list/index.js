// reducer function ka kam hota hai state ko update kar ke new state return karana productListReducer function sath or action thru redux inntrnali kam kara hai

import * as actions from "../../constants/product-list";

const initialState = {
  products: [],
};

function productListReducer(state = initialState, action) {
  switch (action?.type) {
    case actions.UPDATE_LOADER: {
      const oldState = { ...state };
      oldState.isLoading = action.value;
      return oldState;
    }

    case actions.UPDATE_ERROR: {
      const oldState = { ...state };
      oldState.error = action.value;
      return oldState;
    }

    case actions.UPDATE_DATA: {
      const oldState = { ...state };
      oldState.products = action.value;
      return oldState;
    }

    // case "REMOVE_CART": {
    //   const oldState = { ...state };
    //   console.log(action.type)
    //   oldState.products = oldState.products.map(d => {
    //     if(d.id === action.value){
    //       d.discount = "100%"
    //     }

    //     return d
    //   })

    //   return oldState;
    // }

    default:
      return state;
  }
}

export default productListReducer;
