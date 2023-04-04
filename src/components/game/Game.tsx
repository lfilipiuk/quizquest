import {
  correctAnswer,
  flipCurrentFlashcard,
  getCurrentFlashcard,
  getGameFlashcards,
  getNextFlashcard,
  getProgressData,
  getQuestionNumber,
  nextFlashcard,
  showSummary,
  wrongAnswer,
} from "@/features/game/gameSlice";
import { FC, useEffect, useState } from "react";
import GameCard from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../ui/ProgressBar";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import GameSummary from "./GameSummary";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const Game: FC = () => {
  const currentCard = useAppSelector(getCurrentFlashcard);
  const progressData: any[] = useAppSelector(getProgressData);
  const summary = useAppSelector(showSummary);
  const gameFlashcards = useAppSelector(getGameFlashcards);
  const questionNumber = useAppSelector(getQuestionNumber);
  const followingFlashcard = useAppSelector(getNextFlashcard);

  const [answerState, setAnswerState] = useState("pending");

  const dispatch = useAppDispatch();

  const [keyPressed, setKeyPressed] = useState(false);

  const handleCorrectAnswer = () => {
    dispatch(correctAnswer());
    setAnswerState("correct");
  };

  const handleWrongAnswer = () => {
    dispatch(wrongAnswer());
    setAnswerState("incorrect");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!keyPressed) {
        setKeyPressed(true);

        switch (event.key) {
          case "ArrowRight":
            handleCorrectAnswer();
            break;
          case " ":
            event.preventDefault();
            dispatch(flipCurrentFlashcard());
            break;
          case "ArrowLeft":
            handleWrongAnswer();
            break;
          default:
            break;
        }

        setTimeout(() => {
          setKeyPressed(false);
        }, 100);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, keyPressed]);

  const handleAnswer = (answerState: string) => {
    switch (answerState) {
      case "correct":
        return {
          x: "100%",
          opacity: 0,
          transition: { duration: 0.5, delay: 0.1 },
        };
      case "incorrect":
        return {
          x: "-100%",
          opacity: 0,
          transition: { duration: 0.5, delay: 0.1 },
        };
      default:
        return {};
    }
  };

  const innerVariants = (answerState: string) => {
    switch (answerState) {
      case "pending":
        return { scale: 0.95, translateY: "5%" };
      default:
        return { scale: 1, translateY: "0%" };
    }
  };

  if (summary) {
    return <GameSummary />;
  }

  return (
    <div
      className={
        "flex flex-col gap-2 max-w-2xl md:my-10 mx-auto relative md:h-[80vh] h-[90vh]"
      }
    >
      <div className={"text-center mx-auto md:my-10"}>
        <h1 className={"text-xl my-3"}>Question #{questionNumber}</h1>
        <h2 className={"text-slate"}>Click on the card to see the answer</h2>
      </div>

      <AnimatePresence initial={false} mode={"sync"}>
        {currentCard && gameFlashcards && (
          <motion.div className={"relative"}>
            {/* Outer card */}
            <motion.div
              key={currentCard.id}
              layout
              animate={handleAnswer(answerState)}
              onAnimationComplete={() => {
                if (answerState !== "pending") {
                  setAnswerState("pending");
                  // Trigger the next card when the animation is complete
                  dispatch(nextFlashcard());
                }
              }}
            >
              <GameCard
                // key={currentCard.id}
                question={currentCard.question}
                answer={currentCard.answer}
              />
            </motion.div>

            {/*  Inner card*/}
            {followingFlashcard && (
              <div
                className={
                  "absolute md:w-3/4 w-11/12 left-1/2 -translate-x-1/2 -z-10"
                }
              >
                <motion.div
                  key={currentCard.id}
                  animate={innerVariants(answerState)}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={
                    "rounded-xl p-1 w-full mx-auto h-80 flex flex-col justify-center items-center shadow-lg absolute backface-hidden bg-white text-2xl"
                  }
                >
                  <p className={"text-center"}>{followingFlashcard.question}</p>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={
          "absolute bottom-16 md:bottom-0 w-full flex flex-col justify-center items-center px-2"
        }
      >
        {progressData?.length > 0 && <ProgressBar progress={progressData} />}

        <div
          className={
            "flex gap-2 mt-8 flex-col md:flex-row w-full items-center justify-center"
          }
        >
          <button
            onClick={() => handleWrongAnswer()}
            className={
              "bg-red-500 text-white text-sm flex items-center justify-center gap-1 py-2 px-4 rounded-full shadow-sm w-full md:w-auto"
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
            onClick={() => dispatch(flipCurrentFlashcard())}
            className={
              "bg-white text-sm md:flex hidden items-center justify-center gap-1 py-2 px-4 rounded-full shadow-sm w-full md:w-auto"
            }
          >
            <p>Flip</p>
            <div
              className={
                "text-black bg-gray-100 p-0.5 rounded-sm h-4 flex items-center justify-center text-xs border border-gray-300 shadow-sm"
              }
            >
              Spc
            </div>
          </button>

          <button
            onClick={() => handleCorrectAnswer()}
            className={
              "bg-green-400 text-sm flex items-center justify-center gap-1 py-2 px-4 rounded-full shadow-sm w-full md:w-auto"
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
