import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import flashcardData from "../../utils/flashcardData";
import { Dispatch } from "redux";
import { formatCategory } from "../../utils/helpers";

interface FlashcardData {
  id: number;
  category: string;
  question: string;
  answer: string;
  isFlipped?: boolean;
  isHidden?: boolean;
}

interface DeckData {
  category: string;
  flashcards: FlashcardData[];
  description: string;
}

interface DeckDataState {
  decks: DeckData[];
  selectedDeck?: DeckData;
}

const initialState: DeckDataState = {
  decks: [],
  selectedDeck: undefined,
};

export const fetchDeckData = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setDecks(flashcardData as any));
};

const deckSlice = createSlice({
  name: "decks",
  initialState,
  reducers: {
    setDecks(state, action: PayloadAction<DeckData[]>) {
      state.decks = action.payload;
    },
    setCurrentDeck(state, action: PayloadAction<String>) {
      state.selectedDeck = state.decks.find(
          (deck: DeckData) => deck.category === action.payload
      );
    }
  },
});

export const selectAllFlashcards = (state: any) => state.flashcards.flashcards;

export const selectFlashcardsByCategory = (state: any, category: string | undefined) => {

  return state.decks.decks.find(
    (deck: DeckData) => formatCategory(deck.category) === category
    );
};

export const getSelectedDeck = (state: any) => {
    return state.decks.selectedDeck;
}

export const { setDecks, setCurrentDeck } = deckSlice.actions;
export default deckSlice.reducer;
