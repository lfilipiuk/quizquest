import { FC, useEffect, useState } from "react";
import { isCurrentFlashcardFlipped } from "../../features/game/gameSlice";
import { useDispatch, useSelector } from "react-redux";

import GameCardSide from "./GameCardSide";

import {
  correctAnswer,
  flipCurrentFlashcard,
  nextFlashcard,
  wrongAnswer,
} from "../../features/game/gameSlice";
import { motion } from "framer-motion";

interface GameCardProps {
  question: string;
  answer: string;
}

const GameCard: FC<GameCardProps> = ({ question, answer }: GameCardProps) => {
  const [answerState, setAnswerState] = useState("pending");

  const isFlipped = useSelector(isCurrentFlashcardFlipped);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          dispatch(correctAnswer());
          dispatch(nextFlashcard());
          setAnswerState("correct");
          break;
        case " ":
          event.preventDefault();
          dispatch(flipCurrentFlashcard());
          break;
        case "ArrowLeft":
          dispatch(wrongAnswer());
          dispatch(nextFlashcard());
          setAnswerState("incorrect");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  // Define animation variants
  const variants = {
    correct: { x: "100%", opacity: 1, z: -1 },
    wrong: { x: "-100%", opacity: 0, z: -1 },
  };

  // Define animation transition
  const transition = { duration: 0.5 };

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
    <div className={"absolute w-3/4 left-1/2 -translate-x-1/2"}>
      <motion.div exit={handleAnswer(answerState)} transition={transition}>
        <GameCardSide text={question} side={isFlipped ? "A" : "B"} />
        <GameCardSide text={answer} side={isFlipped ? "B" : "A"} />
      </motion.div>
    </div>
  );
};

export default GameCard;
