import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import webBuilderReducer from "../features/builder/webBuilderSlice";
import contentReducer from "../features/content/contentSlice";
import layoutReducer from "../features/layout/layoutSlice";
import modalReducer from "../features/modal/modalSlice";
import drawerReducer from "../features/drawer/drawerSlice";
import alertReducer from "../features/alert/alertSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import assetSelectionReducer from "../features/asset/assetSelectionSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { reduxStorage } from "./storage";

const rootReducer = combineReducers({
  auth: authReducer,
  // content: contentReducer,
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
  whitelist: ["auth", "content"], // these reducers will persist data
  // blacklist: ['exampleReducer'], // these reducers will not persist data
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, coments: ComentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
