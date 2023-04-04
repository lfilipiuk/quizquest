import { FC } from "react";
import { isCurrentFlashcardFlipped } from "@/features/game/gameSlice";
import GameCardSide from "./GameCardSide";
import {useAppSelector} from "@/app/hooks";

interface GameCardProps {
  question: string;
  answer: string;
}

const GameCard: FC<GameCardProps> = ({ question, answer }: GameCardProps) => {
  const isFlipped = useAppSelector(isCurrentFlashcardFlipped);

  return (
    <div className={"absolute md:w-3/4 w-11/12 left-1/2 -translate-x-1/2"}>
      <GameCardSide text={question} side={isFlipped ? "A" : "B"} />
      <GameCardSide text={answer} side={isFlipped ? "B" : "A"} />
    </div>
  );
};

export default GameCard;
