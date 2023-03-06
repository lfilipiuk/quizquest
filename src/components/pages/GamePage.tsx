import { resetGame, setGameData,setDeckName } from "../../features/game/gameSlice";
import { useDispatch } from "react-redux";
import Game from "../game/Game";
import { useParams } from "react-router-dom";
import { useGetDecksQuery } from "../../features/deck/deckSlice";
import { useCallback, useEffect } from "react";
import BackHomeButton from "../ui/BackHomeButton";

const GamePage = () => {
  const { deckId } = useParams();
  const { data, isLoading } = useGetDecksQuery({});
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(dispatch, []);

  let deck: any = {};
  useEffect(() => {
    deck = data?.find((deck: any) => deck.id === deckId);

    if (!deck) return;

    memoizedDispatch(setGameData(deck.flashcards));
    memoizedDispatch(setDeckName(deck.name));
    memoizedDispatch(resetGame());
  }, [memoizedDispatch, deckId, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackHomeButton />
      <Game />
    </>
  );
};

export default GamePage;
