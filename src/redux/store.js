import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsReducer from "./jobsReducer";
import userReducer from "./userReducer";
import blogReducer from "./blogReducer";
import categoryReducer from "./categoryReducer";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   blacklist: ["jobs", "blog", "category"],
// };

// const rootReducer = combineReducers({
//   jobs: jobsReducer,
//   user: userReducer,
//   blog: blogReducer,
//   category: categoryReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    blog: blogReducer,
    category: categoryReducer,
  },
});
