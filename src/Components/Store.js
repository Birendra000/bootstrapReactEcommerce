import { combineReducers, createStore } from "redux";
import CartReducer from "./CartReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  itemStore: itemReducer,
  cartStore: CartReducer,
});

const store = createStore(rootReducer);

export default store;
