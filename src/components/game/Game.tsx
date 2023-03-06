import { useDispatch, useSelector } from "react-redux";
import {
    getCorrectAnswersCount,
    getCurrentFlashcard,
    getDeckName, getFlashcardsCount,
    getGameFlashcards,
    getProgressData, getQuestionNumber, getWrongAnswersCount,
    reviseMistakes,
    showSummary,
} from "../../features/game/gameSlice";
import { FC } from "react";
import GameCard from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../ui/ProgressBar";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { iconSelector } from "../../utils/helpers";

const Game: FC = () => {
  const dispatch = useDispatch();
  const currentCard = useSelector(getCurrentFlashcard);
  const progressData: any[] = useSelector(getProgressData);
  const summary = useSelector(showSummary);
  const gameFlashcards = useSelector(getGameFlashcards);
  const deckName = useSelector(getDeckName);
  const correctAnswers = useSelector(getCorrectAnswersCount);
  const wrongAnswers = useSelector(getWrongAnswersCount);
  const flashcardsCount = useSelector(getFlashcardsCount);
  const questionNumber = useSelector(getQuestionNumber);

  if (summary) {
    return (
      <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto relative"}>
        <h1 className={"text-3xl mx-auto"}>
          You scored {correctAnswers} out of {flashcardsCount}!
        </h1>
        <h2 className={"text-xl text-slate mx-auto"}>
          Here are the things you still need to revise:
        </h2>

        <div
          className={"m-4 bg-white shadow-lg p-3"}
          style={{
            height: "auto",
            borderRadius: "12px",
          }}
        >
          <div className={"flex items-center gap-3"}>
            <div
              style={{
                backgroundColor: iconSelector(deckName).backgroundColor,
              }}
              className={
                "w-24 h-24 rounded-lg flex justify-center items-center select-none"
              }
            >
              <p className={"text-3xl"}>{iconSelector(deckName).emoji}</p>
            </div>
            <div>
              <h3 className={"font-medium flex-1 text-xl text-center"}>
                {deckName}
              </h3>
              <p className={"text-slate"}>
                {wrongAnswers} things left to learn
              </p>
            </div>
          </div>

          <div className={"mt-4"}>
            <button
                onClick={() => dispatch(reviseMistakes())}
              className={
                "bg-quizBlue text-white font-medium text-center w-full p-3 rounded-lg mx-auto block w-full"
              }
            >
              Revise mistakes
            </button>
          </div>

          {gameFlashcards
            .filter((flashcard: any) => flashcard.status === "wrong")
            .map((flashcard: any) => (
              <div
                key={flashcard.id}
                className={
                  "flex flex-col gap-2 bg-gray-100 p-2 rounded-lg my-3 py-6 px-4"
                }
              >
                <p className={"font-medium"}>{flashcard.question}</p>
                <p className={"text-slate"}>{flashcard.answer}</p>
              </div>
            ))}
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
      <div className={"text-center mx-auto"}>
        <h1 className={"text-xl my-3"}>Question #{questionNumber}</h1>
        <h2 className={"text-slate"}>Click on the card to see the answer</h2>
      </div>

      <AnimatePresence initial={false} mode={"sync"}>
        {currentCard && gameFlashcards && (
          <motion.div key={currentCard.id} layout className={"relative"}>
            <GameCard
              key={currentCard.id}
              question={currentCard.question}
              answer={currentCard.answer}
            />

            {/*  Inner card*/}
            <motion.div
              className={
                "rounded-xl p-1 w-3/4 mx-auto h-80 flex flex-col justify-center items-center shadow-lg absolute backface-hidden bg-white scale-95 top-5 -z-10 text-2xl left-1/2 -translate-x-1/2"
              }
            >
              <p className={"blur text-slate"}>This is another question?</p>
            </motion.div>
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
