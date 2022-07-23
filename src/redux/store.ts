import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import tokenSlice from "./tokenSlice";

const rootReducer = combineReducers({
  saveToken: tokenSlice.reducer,
  deleteToken: tokenSlice.reducer,
});
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootReducer = ReturnType<typeof rootReducer>;
