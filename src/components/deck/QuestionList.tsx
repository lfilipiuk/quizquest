import {
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeckData,
  getSelectedDeck,
  selectAllFlashcards,
  selectFlashcardsByCategory,
  setCurrentDeck,
} from "../../features/flashcard/deckSlice";
import { Dispatch } from "redux";
import { DeckReducer } from "../../app/store";
import QuestionListItem from "./QuestionListItem";

interface FlashcardListProps {
  deck: [];

}

interface FlashcardItem {
  id: Key;
  question: string;
  answer: string;
  status?: string | undefined;
}

const QuestionList: FC<FlashcardListProps> = ({ deck }: FlashcardListProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeckData() as any);
  }, [dispatch]);



  if (!deck) return <div>Loading...</div>;

  return (
    <ul className={"mx-auto max-w-2xl"}>
      {deck.map((flashcard: FlashcardItem) => (
        <QuestionListItem
          key={flashcard.id}
          question={flashcard.question}
          answer={flashcard.answer}
          status={flashcard.status? flashcard.status : "none"}
        />
      ))}
    </ul>
  );
};

export default QuestionList;
