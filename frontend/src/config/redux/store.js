import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import postReducer from "./reducer/postReducer";

/**
 STEPS for State Managemennt

Component
      ↓
dispatch(Action)
      ↓
Reducer updates Store
      ↓
Store changes
      ↓
Provider makes updated store available
      ↓
useSelector gets new state
      ↓
React re-renders UI 

*/

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});
