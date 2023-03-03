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
      <GameCardSide text={question} side={isFlipped ? "A" : "B"}  />
      <GameCardSide text={answer} side={isFlipped ? "B" : "A"}  />
      <div
          className={
            "my-20 rounded-xl p-1 w-3/4 mx-auto h-80 flex flex-col justify-center items-center shadow-lg absolute backface-hidden bg-white top-5 scale-95 -z-10 text-2xl"
          }>
        <p className={'blur text-slate'}>This is another question?</p>
      </div>
    </div>
  );
};

export default GameCard;
