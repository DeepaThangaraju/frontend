import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  vechicalReducers,
  vechicalDetailsReducers,
} from "./Reducers/vechicalReducers";
import { cartReducer } from "./Reducers/cartReducer";
import { orderItemReducer,orderDetailsReducer } from "./Reducers/orderReducer";
import { userDetailReducers, userLoginReducers,userRegisterReducers,updateProfileReducers } from "./Reducers/userReducer";
const reducer = combineReducers({
  vechicalReducers: vechicalReducers,
  vechicalDetailsReducers: vechicalDetailsReducers,
  cartReducer: cartReducer,
  userLoginReducer:userLoginReducers,
  userRegisterReducer:userRegisterReducers,
  userDetailReducer:userDetailReducers,
  updateProfileReducer:updateProfileReducers,
  orderItemReducer:orderItemReducer,
  orderDetailsReducer:orderDetailsReducer
});

const itemsInStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const userInfoInStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  :null;

  const shippingAddressInStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  :{};

const initialState = {
  cartReducer:{cartItems:itemsInStorage , shippingAddress:shippingAddressInStorage},
  userLoginReducer:{userInfo:userInfoInStorage}
};
const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
