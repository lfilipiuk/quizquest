import { FC } from "react";
import { isCurrentFlashcardFlipped } from "../../features/game/gameSlice";
import { useSelector } from "react-redux";

import GameCardSide from "./GameCardSide";

interface GameCardProps {
  question: string;
  answer: string;
}

const GameCard: FC<GameCardProps> = ({ question, answer }: GameCardProps) => {
  const isFlipped = useSelector(isCurrentFlashcardFlipped);

  return (
    <div className={"flex justify-center"}>
      <GameCardSide text={question} side={isFlipped ? "A" : "B"} />
      <GameCardSide text={answer} side={isFlipped ? "B" : "A"} />
    </div>
  );
};

export default GameCard;
