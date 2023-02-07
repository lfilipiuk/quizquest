import {FC, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchDeckData, getSelectedDeck,
    selectAllFlashcards,
    selectFlashcardsByCategory, setCurrentDeck
} from "../../features/flashcard/deckSlice";
import { Dispatch } from "redux";
import {DeckReducer} from "../../app/store";
import QuestionListItem from "./QuestionListItem";

interface FlashcardListProps {
    deckId: any;
}

interface FlashcardItem {
    id: Key,
    question: string,
    answer: string,
}

const QuestionList: FC<FlashcardListProps> = ({deckId}: FlashcardListProps) => {
    const dispatch = useDispatch();
    const deck = useSelector((state) => selectFlashcardsByCategory(state, deckId));

    useEffect(() => {
        dispatch(fetchDeckData() as any);
    }, [dispatch]);

    if(!deck) return (<div>Loading...</div>);

    return (
        <ul className={'mx-auto max-w-2xl'}>
            {deck.flashcards.map((flashcard: FlashcardItem) => (
                <QuestionListItem key={flashcard.id} question={flashcard.question} answer={flashcard.answer}/>
            ))}
        </ul>

    );
}

export default QuestionList;