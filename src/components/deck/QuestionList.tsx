import {FC, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchFlashcardData,
    selectAllFlashcards,
    selectFlashcardsByCategory
} from "../../features/flashcard/flashcardSlice";
import { Dispatch } from "redux";
import {FlashCardReducer} from "../../app/store";
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
    const flashcards = useSelector((state) => selectFlashcardsByCategory(state, deckId));

    useEffect(() => {
        dispatch(fetchFlashcardData() as any);
    }, [dispatch]);

    return (
        <ul className={'mx-auto max-w-2xl'}>
            {flashcards.map((flashcard: FlashcardItem) => (
                <QuestionListItem key={flashcard.id} question={flashcard.question} answer={flashcard.answer}/>
            ))}
        </ul>
    );
}

export default QuestionList;