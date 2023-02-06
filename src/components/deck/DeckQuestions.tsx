import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useDispatch } from "react-redux";
import { resetGame } from "../../features/game/gameSlice";

export const DeckQuestions: FC = () => {
  //useParams to get deck name
  const { deckId } = useParams();
  const [showGame, setShowGame] = useState(false);
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(resetGame());
  };

  return (
    <div className={"flex flex-col gap-2 w-1/2 my-10 mx-auto"}>
      <Link
        onClick={newGame}
        to={`/learning/${deckId}`}
        className={
          "bg-blue-600 w-52 mx-auto p-4 rounded-lg text-white hover:bg-blue-700 transition-all duration-200 text-xl text-center"
        }
      >
        Let's learn
      </Link>

      {!showGame && <QuestionList deckId={deckId} />}
    </div>
  );
};
