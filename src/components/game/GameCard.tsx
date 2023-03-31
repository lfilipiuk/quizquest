import {FC} from "react";
import { isCurrentFlashcardFlipped } from "@/features/game/gameSlice";
import {  useSelector } from "react-redux";

import GameCardSide from "./GameCardSide";


interface GameCardProps {
  question: string;
  answer: string;
  answerState: string;
}

const GameCard: FC<GameCardProps> = ({ question, answer, answerState}: GameCardProps) => {
  const isFlipped = useSelector(isCurrentFlashcardFlipped);

  // Define animation variants
  const variants = {
    correct: { x: "100%", opacity: 1, z: -1 },
    wrong: { x: "-100%", opacity: 0, z: -1 },
  };

  const handleAnswer = (answerState: string) => {
    switch (answerState) {
      case "correct":
        return variants.correct;
      case "incorrect":
        return variants.wrong;
      default:
        return {}; // No animation for pending state
    }
  };

  return (
    <div className={"absolute md:w-3/4 w-11/12 left-1/2 -translate-x-1/2"}>
        <GameCardSide text={question} side={isFlipped ? "A" : "B"} />
        <GameCardSide text={answer} side={isFlipped ? "B" : "A"} />
    </div>
  );
};

export default GameCard;
