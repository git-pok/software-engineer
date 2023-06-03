import products from "../reducers/productsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ products });

export default rootReducer;

