import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import flashcardData from "../../utils/flashcardData";
import {Dispatch} from "redux";

interface FlashcardData {
  id: number;
  category: string;
  question: string;
  answer: string;
  isFlipped?: boolean;
  isHidden?: boolean;
}

interface FlashcardDataState {
  flashcards: FlashcardData[];
}

const initialState: FlashcardDataState = {
  flashcards: [],
};

export const fetchFlashcardData = () => (dispatch: Dispatch<AnyAction>) => {
  const enrichedFlashcardData : any = flashcardData.map((flashcard ) => {
    return {
      ...flashcard,
      isFlipped: false,
      isHidden: false,
    };
  });

  dispatch(setFlashcardData(enrichedFlashcardData));
};

const flashcardDataSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    setFlashcardData(state, action: PayloadAction<FlashcardData[]>) {
      state.flashcards = action.payload;
    },
  },
});

export const selectAllFlashcards = (state: any) => state.flashcards.flashcards;

export const selectFlashcardsByCategory = (state: any, category: string) => {
  return state.flashcards.flashcards.filter(
      (flashcard: FlashcardData) =>
          flashcard.category.toLowerCase().replace(" ", "-") === category
  );
}


export const { setFlashcardData} = flashcardDataSlice.actions;

export default flashcardDataSlice.reducer;
