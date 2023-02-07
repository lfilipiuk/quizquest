import { configureStore } from "@reduxjs/toolkit";
import deckReducer from "../features/flashcard/deckSlice";
import gameReducer from "../features/game/gameSlice";

export type DeckReducer = ReturnType<typeof deckReducer>;

export const store = configureStore({
  reducer: {
    decks: deckReducer,
    game: gameReducer,
  },
});
