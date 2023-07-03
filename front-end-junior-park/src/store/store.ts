import { userSlice } from "./user/user.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";

//import { cartSlice } from '@/cart/cart.slice'
const isClient = typeof window !== "undefined";

const combinedReducers = combineReducers({
  user: userSlice.reducer,
});

let mainReducer = combineReducers;

if (isClient) {
  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "junior-park",
    storage, 
    whitelist: ["cart"],
  };

  mainReducer = persistReducer(persistConfig, combinedReducers);
}

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof mainReducer>;
