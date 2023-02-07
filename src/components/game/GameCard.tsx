import { FC } from "react";
import { isCurrentFlashcardFlipped } from "../../features/game/gameSlice";
import { useSelector } from "react-redux";

import GameCardSide from "./GameCardSide";

interface GameCardProps {
  question: string;
  answer: string;
    number: number;
    count: number;
}

const GameCard: FC<GameCardProps> = ({ question, answer, number, count }: GameCardProps) => {
  const isFlipped = useSelector(isCurrentFlashcardFlipped);

  const cardNumber = `${number}/${count}`;

  return (
    <div className={"flex justify-center"}>
      <GameCardSide text={question} side={isFlipped ? "A" : "B"} number = {cardNumber} />
      <GameCardSide text={answer} side={isFlipped ? "B" : "A"} number = {cardNumber} />
    </div>
  );
};

export default GameCard;
