import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import LoginSlice from "./loginSlice";

const rootReducer = combineReducers({
  loginAction: LoginSlice.reducer,
  logoutAction: LoginSlice.reducer,
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
