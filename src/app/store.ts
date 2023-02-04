import { configureStore } from "@reduxjs/toolkit";
import flashcardDataReducer from "../features/flashcard/flashcardSlice";

export type FlashCardReducer = ReturnType<typeof flashcardDataReducer>;

export const store = configureStore({
  reducer: {
    flashcards: flashcardDataReducer,
  },
});
