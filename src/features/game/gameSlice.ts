import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type GameFlashcard = {
  id: number;
  question: string;
  answer: string;
  status: string;
};

const initialState = {
  initialFlashcards: [],
  gameFlashcards: [] as GameFlashcard[],
  currentFlashcard: 0,
  currentFlashcardIsFlipped: false,
  shuffleMode: false,
  showSummary: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameData(state, action: PayloadAction<any>) {
      state.initialFlashcards = action.payload.map((flashcard: any) => ({
        ...flashcard,
        status: "unanswered",
      }));
      state.gameFlashcards = [...state.initialFlashcards];
      if(state.gameFlashcards.length > 0){
        state.gameFlashcards[0].status = "current";
      }
    },
    setCurrentFlashcard(state, action: PayloadAction<number>) {
      state.currentFlashcard = action.payload;
      state.gameFlashcards[action.payload].status = "current";
    },
    flipCurrentFlashcard(state) {
      state.currentFlashcardIsFlipped = !state.currentFlashcardIsFlipped;
    },
    nextFlashcard(state) {
      state.currentFlashcard++;
      state.currentFlashcardIsFlipped = false;

      if(state.currentFlashcard >= state.gameFlashcards.length){
        state.showSummary = true;
        return;
      }
      state.gameFlashcards[state.currentFlashcard].status = "current";
    },
    correctAnswer(state) {
      state.gameFlashcards[state.currentFlashcard].status = "correct";
    },
    wrongAnswer(state) {
      state.gameFlashcards[state.currentFlashcard].status = "wrong";
    },
    resetGame(state) {
      state.gameFlashcards = [...state.initialFlashcards];
      state.currentFlashcard = 0;
      state.currentFlashcardIsFlipped = false;
      state.shuffleMode = false;
      state.showSummary = false;
    },
  },
});

export const {
  setGameData,
  flipCurrentFlashcard,
  nextFlashcard,
  correctAnswer,
  wrongAnswer,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
export const getCurrentFlashcard = (state: any) =>
  state.game.initialFlashcards[state.game.currentFlashcard];

export const isCurrentFlashcardFlipped = (state: any) =>
  state.game.currentFlashcardIsFlipped;

export const getProgressData: any = (state: any) => {
  return state.game.gameFlashcards.map((flashcard: any) => {
    return {
      id: flashcard.id,
      status: flashcard.status,
    };
  });
};

export const getGameFlashcards = (state: any) => state.game.gameFlashcards;

export const getCurrentFlashcardIndex = (state: any) =>
    state.game.currentFlashcard;

export const getFlashcardsCount = (state: any) =>
    state.game.gameFlashcards.length;

export const showSummary = (state: any) => state.game.showSummary;