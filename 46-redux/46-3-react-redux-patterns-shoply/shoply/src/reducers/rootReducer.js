import products from "./productsReducer";
import cart from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ products, cart });

export default rootReducer;

