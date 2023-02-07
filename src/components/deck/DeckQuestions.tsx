import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useDispatch } from "react-redux";
import { resetGame } from "../../features/game/gameSlice";
import LinkButton from "../ui/LinkButton";

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
      <LinkButton onClick={newGame} link={`/learning/${deckId}`}>
        Let's learn
      </LinkButton>

      {!showGame && <QuestionList deckId={deckId} />}
    </div>
  );
};
