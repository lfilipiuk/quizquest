import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeckData,
  selectFlashcardsByCategory,
} from "../../features/flashcard/deckSlice";
import {
    getCurrentFlashcard, getCurrentFlashcardIndex, getFlashcardsCount, getGameFlashcards,
    getProgressData, resetGame,
    setGameData, showSummary,
} from "../../features/game/gameSlice";
import {FC, ReactNode, useEffect} from "react";
import GameCard from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../ui/ProgressBar";
import LinkButton from "../ui/LinkButton";
import GameSummary from "./GameSummary";


const Game: FC = () => {
  const { deckId } = useParams();
  const currentCard = useSelector(getCurrentFlashcard);
  const flashcards = useSelector((state) =>
    selectFlashcardsByCategory(state, deckId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeckData() as any);
    dispatch(setGameData(flashcards));
  }, [dispatch]);

  const progressData: any[] = useSelector(getProgressData);

  const currentCardNumber = useSelector(getCurrentFlashcardIndex) + 1;
  const flashcardsCount = useSelector(getFlashcardsCount);
  const summary = useSelector(showSummary);
  const gameFlashcards = useSelector(getGameFlashcards);

  if(summary) {
    return (
        <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto relative"}>
            <h1 className={"font-bold text-gray-400 text-xl mx-auto"}>
                Finished
            </h1>
            <LinkButton onClick={() => dispatch(resetGame())}>Start Over</LinkButton>
            <div>
                <GameSummary deck={gameFlashcards}/>
            </div>

        </div>
    )
  }

  return (
    <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto relative"}>
      {progressData?.length > 0 && <ProgressBar progress={progressData} />}


      <h1 className={"font-bold text-gray-400 text-xl mx-auto"}>
        Swipe left or right
      </h1>

      <AnimatePresence initial={false} mode={"sync"}>
        {currentCard && flashcards && (
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
              number ={currentCardNumber}
              count={flashcardsCount}
            />
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default Game;
