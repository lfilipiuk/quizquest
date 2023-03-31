import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "@/features/game/gameSlice";
import {apiSlice} from "@/features/api/apiSlice";

// export type DeckReducer = ReturnType<typeof deckReducer>;

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // decks: deckReducer,
    game: gameReducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});
