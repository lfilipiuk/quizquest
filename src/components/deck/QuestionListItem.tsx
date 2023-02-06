import {FC} from "react";

interface FlashcardProps {
    question: string,
    answer: string,
}

const QuestionListItem : FC<FlashcardProps> = ({question, answer} : FlashcardProps) => {
    return (
        <li className={'bg-gray-100 border border-1 border-gray-400 my-5 rounded-xl p-4'}>
            <h4 className={'text-center font-semibold mb-2'}>{question}</h4>
            <h4 className={'italic font-normal'}>{answer}</h4>
        </li>
    );
}

export default QuestionListItem;