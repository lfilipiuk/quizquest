import { FC } from "react";
import { useParams } from "react-router-dom";
import FlashcardList from "./FlashcardList";

export const Deck: FC = () => {
  //useParams to get deck name
  const { deckId } = useParams();

  return (
    <div className={"text-black"}>
        <button className={'bg-blue-600 p-4 rounded-xl text-white mx-auto'}>Let's learn</button>
      <FlashcardList deckId={deckId} />
    </div>
  );
};
