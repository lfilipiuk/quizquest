import { configureStore } from "@reduxjs/toolkit";
import flashcardDataReducer from "../features/flashcard/flashcardSlice";
import gameReducer from "../features/game/gameSlice";

export type FlashCardReducer = ReturnType<typeof flashcardDataReducer>;

export const store = configureStore({
  reducer: {
    flashcards: flashcardDataReducer,
    game: gameReducer,
  },
});
