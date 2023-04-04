import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import gameReducer from "@/features/game/gameSlice";
import { apiSlice } from "@/features/api/apiSlice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  game: gameReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
  });
};

export type GameReducer = ReturnType<typeof gameReducer>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
