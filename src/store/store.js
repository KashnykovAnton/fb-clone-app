import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postsSliceReducer } from "./posts/posts-slice-posts";
import { profileSliceReducer } from "./profile/profile-slice";
import { friendsSliceReducer } from "./friends/friends-slice";
import { postsFiltersSliceReducer } from "./posts/posts-slice-filter";
import { usersSliceReducer } from "./users/users-slice-users";
import { usersFiltersSliceReducer } from "./users/users-slice-filter";

const persistConfig = {
  key: "app-storage",
  storage,
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const combinedReducers = combineReducers({
  posts: postsSliceReducer,
  profile: profileSliceReducer,
  friends: friendsSliceReducer,
  postsFilters: postsFiltersSliceReducer,
  users: usersSliceReducer,
  usersFilters: usersFiltersSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistore = persistStore(store);
