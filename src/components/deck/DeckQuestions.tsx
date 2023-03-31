import { FC } from "react";
import { useParams } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useDispatch } from "react-redux";
import { resetGame } from "@/features/game/gameSlice";
import LinkButton from "../ui/LinkButton";
import {
  useGetDecksQuery,
} from "@/features/deck/deckSlice";

export const DeckQuestions: FC = () => {
  //useParams to get deck name
  const { deckId } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess } = useGetDecksQuery({});

  const newGame = () => {
    dispatch(resetGame());
  };

  let deck: any = {};

  if (isSuccess && data) {
    deck = data?.find((deck: any) => deck.id === deckId);
  }

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto"}>
      <LinkButton onClick={newGame} link={`/learning/${deckId}`}>
        Let's learn
      </LinkButton>

      <QuestionList deck={deck.flashcards} />
    </div>
  );
};
