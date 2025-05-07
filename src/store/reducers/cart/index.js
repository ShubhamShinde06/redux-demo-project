// reducer function ka kam hota hai state ko update kar ke new state return karana productListReducer function sath or action thru redux inntrnali kam kara hai

import * as actions from "../../constants/cart";

const initialState = {
  cart: {},
};

function cartListReducer(state = initialState, action) {
  const { value } = action;

  switch (action?.type) {
    case actions.UPDATE_CART: {
      const oldState = { ...state };
      oldState.cart = { ...oldState.cart };

      const id = value["id"];
      if (oldState?.cart[id]?.count) {
        oldState.cart[id].count += 1;
      } else {
        oldState.cart[id] = {};
        oldState.cart[id].count = 1;
        oldState.cart[id].value = value;
      }

      return oldState;
    }

    case actions.REMOVE_CART: {
      const oldState = { ...state };
      const oldCart = { ...oldState.cart };
      delete oldCart[value];

      oldState.cart = { ...oldCart };

      return oldState;
    }

    default:
      return state;
  }
}

export default cartListReducer;

export const getCartSelector = (state) => {
  return state.cart.cart
}
