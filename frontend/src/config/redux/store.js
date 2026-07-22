import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import postReducer from "./reducer/postReducer";

/**
 STEPS for State Managemennt

 Submit Action -> Reducer -> Store -> Provider -> useSelector, useDispatch
 Handle action in its Reducer -> Update State -> useSelector to get the updated state
 Register(here) the Reducer in Store -> useSelector to get the state from store
 */

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});
