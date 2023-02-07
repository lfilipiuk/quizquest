import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../../features/game/gameSlice";
import LinkButton from "../ui/LinkButton";
import { selectFlashcardsByCategory } from "../../features/flashcard/deckSlice";

export const DeckQuestions: FC = () => {
  //useParams to get deck name
  const { deckId } = useParams();
  const dispatch = useDispatch();
  const deck = useSelector((state) =>
    selectFlashcardsByCategory(state, deckId)
  );

  const newGame = () => {
    dispatch(resetGame());
  };

  return (
    <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto"}>
      <LinkButton onClick={newGame} link={`/learning/${deckId}`}>
        Let's learn
      </LinkButton>

      <QuestionList deck={deck.flashcards} />
    </div>
  );
};
