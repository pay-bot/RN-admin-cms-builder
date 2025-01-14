import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "../features/auth/authSlice";
import contentReducer from "../features/content/contentSlice";
import { reduxStorage } from "./storage";
import { clientStorage } from "@/state/clientPersister";

const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
  // modal: modalReducer,
  // drawer: drawerReducer,
  // alert: alertReducer,
  // layout: layoutReducer,
  // sidebar: sidebarReducer,
  // webBuilder: webBuilderReducer,
  // assetSelection: assetSelectionReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: reduxStorage,
  timeout: 0,
  whitelist: ["auth"], // these reducers will persist data
  // blacklist: ['exampleReducer'], // these reducers will not persist data
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, coments: ComentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
