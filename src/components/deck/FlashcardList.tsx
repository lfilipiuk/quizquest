import {FC, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchFlashcardData,
    selectAllFlashcards,
    selectFlashcardsByCategory
} from "../../features/flashcard/flashcardSlice";
import { Dispatch } from "redux";
import {FlashCardReducer} from "../../app/store";
import Flashcard from "./Flashcard";

interface FlashcardListProps {
    deckId: any;
}

interface FlashcardItem {
    id: Key,
    question: string,
    answer: string,
}

const FlashcardList: FC<FlashcardListProps> = ({deckId}: FlashcardListProps) => {
    const dispatch = useDispatch();

    const flashcards = useSelector((state) => selectFlashcardsByCategory(state, deckId));


    useEffect(() => {
        dispatch(fetchFlashcardData() as any);
    }, [dispatch]);

    return (
        <ul className={'w-1/2 mx-auto'}>
            {flashcards.map((flashcard: FlashcardItem) => (
                <Flashcard key={flashcard.id} question={flashcard.question} answer={flashcard.answer}/>
            ))}
        </ul>
    );
}

export default FlashcardList;