import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFlashcardData,
  selectFlashcardsByCategory,
} from "../../features/flashcard/flashcardSlice";
import {
  getCurrentFlashcard, getGameFlashcards,
  getProgressData,
  setGameData,
} from "../../features/game/gameSlice";
import { FC, useEffect } from "react";
import GameCard from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../ui/ProgressBar";

const Game: FC = () => {
  const { deckId } = useParams();
  const currentCard = useSelector(getCurrentFlashcard);
  const flashcards = useSelector((state) =>
    selectFlashcardsByCategory(state, deckId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlashcardData() as any);
    dispatch(setGameData(flashcards));
  }, [dispatch]);

  const progressData: any[] = useSelector(getProgressData);

  return (
    <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto relative"}>
      {progressData?.length > 0 && <ProgressBar progress={progressData} />}

      <h1 className={"font-bold text-gray-400 text-xl mx-auto"}>
        Swipe left or right
      </h1>

      <AnimatePresence initial={false} mode={"sync"}>
        {currentCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={currentCard.id}
            layout
            className={"absolute w-full "}
          >
            <GameCard
              key={currentCard.id}
              question={currentCard.question}
              answer={currentCard.answer}
            />
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default Game;
