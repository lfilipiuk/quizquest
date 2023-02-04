import {FC} from "react";

interface FlashcardProps {
    question: string,
    answer: string,
}

const Flashcard : FC<FlashcardProps> = ({question, answer} : FlashcardProps) => {
    return (
        <li className={'bg-gray-100 border border-1 border-gray-400 m-1 rounded-xl p-4'}>
            <h4 className={'text-center mb-2'}>{question}</h4>
            <h4 className={'italic font-normal'}>{answer}</h4>
        </li>
    );
}

export default Flashcard;