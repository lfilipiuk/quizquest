import {FC} from "react";
import QuestionList from "../deck/QuestionList";

interface GameSummaryProps {
    deck: any;
}

// @ts-ignore
const GameSummary : FC<GameSummaryProps> = ({deck}) => {
    return (
        <div>
            <QuestionList deck={deck}/>
        </div>
    )
}

export default GameSummary;