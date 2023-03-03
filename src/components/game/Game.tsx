import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentFlashcard,
  getCurrentFlashcardIndex,
  getFlashcardsCount,
  getGameFlashcards,
  getProgressData,
  resetGame,
  showSummary,
} from "../../features/game/gameSlice";
import { FC } from "react";
import GameCard from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../ui/ProgressBar";
import LinkButton from "../ui/LinkButton";
import GameSummary from "./GameSummary";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Game: FC = () => {
  const dispatch = useDispatch();
  const currentCard = useSelector(getCurrentFlashcard);
  const progressData: any[] = useSelector(getProgressData);
  const currentCardNumber = useSelector(getCurrentFlashcardIndex) + 1;
  const flashcardsCount = useSelector(getFlashcardsCount);
  const summary = useSelector(showSummary);
  const gameFlashcards = useSelector(getGameFlashcards);

  if (summary) {
    return (
      <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto relative"}>
        <h1 className={"font-bold text-gray-400 text-xl mx-auto"}>Finished</h1>
        <LinkButton onClick={() => dispatch(resetGame())}>
          Start Over
        </LinkButton>
        <div>
          <GameSummary deck={gameFlashcards} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        "flex flex-col gap-2 max-w-2xl my-10 mx-auto relative h-[80vh]"
      }
    >
      <div className={'text-center mx-auto'}>
        <h1 className={"text-xl my-3"}>Question #1</h1>
        <h2 className={'text-slate'}>Click on the card to see the answer</h2>
      </div>

      <AnimatePresence initial={false} mode={"sync"}>
        {currentCard && gameFlashcards && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={currentCard.id}
            layout
            className={"absolute w-full top-32 z-10"}
          >
            <GameCard
              key={currentCard.id}
              question={currentCard.question}
              answer={currentCard.answer}
              number={currentCardNumber}
              count={flashcardsCount}
            />
          </motion.div>
        )}
      </AnimatePresence>


      <div
        className={
          "absolute bottom-0 w-full flex flex-col justify-center items-center"
        }
      >
        {progressData?.length > 0 && <ProgressBar progress={progressData} />}
        <div className={"flex gap-2 mt-8"}>
          <button
            className={
              "bg-red-500 text-white text-sm flex items-center justify-center gap-1 py-2 px-4 rounded-full shadow-sm"
            }
          >
            <p>Not yet</p>
            <div
              className={
                "text-black bg-white p-0.5 shadow-sm rounded-sm w-4 h-4 flex items-center justify-center"
              }
            >
              <HiArrowLeft />
            </div>
          </button>

          <button
            className={
              "bg-gray-50 text-sm flex items-center justify-center gap-1 py-2 px-4 rounded-full shadow-sm"
            }
          >
            <p>Flip</p>
            <div
              className={
                "text-black bg-white p-0.5 shadow-sm rounded-sm h-4 flex items-center justify-center text-xs border shadow-sm"
              }
            >
              Spc
            </div>
          </button>

          <button
            className={
              "bg-green-400 text-sm flex items-center justify-center gap-1 py-2 px-4 rounded-full shadow-sm"
            }
          >
            <p>I know this</p>
            <div
              className={
                "text-black bg-white p-0.5 shadow-sm rounded-sm w-4 h-4 flex items-center justify-center"
              }
            >
              <HiArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
