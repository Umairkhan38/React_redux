import { combineReducers } from "redux";
import amountReducer from "./reducer.js";
import { itemReducer } from "./reducer.js";

const uniteReducers = combineReducers({
  amount: amountReducer,
  items: itemReducer,
});

export default uniteReducers;
