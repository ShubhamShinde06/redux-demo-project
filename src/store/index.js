import { createStore, combineReducers } from "redux";
import productListReducer from "./reducers/product-list";
import cartListReducer from "./reducers/cart";
import { composeWithDevTools } from "@redux-devtools/extension";

const enhancers = composeWithDevTools({trace: true, limit: 10})

export const store = createStore(combineReducers({
    products: productListReducer,
    cart: cartListReducer
}), enhancers())


