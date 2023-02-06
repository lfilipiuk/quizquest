import { FC, useState } from "react";
import {
  correctAnswer,
  flipCurrentFlashcard,
  isCurrentFlashcardFlipped,
  nextFlashcard,
  wrongAnswer,
} from "../../features/game/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Simulate } from "react-dom/test-utils";

interface GameCardProps {
  question: string;
  answer: string;
}

const GameCard: FC<GameCardProps> = ({ question, answer }: GameCardProps) => {
  const dispatch = useDispatch();

  let card;

  if (useSelector(isCurrentFlashcardFlipped)) {
    card = (
      <div className={"flex flex-col gap-2"}>
        <h1 className={"text-2xl font-bold"}>{answer}</h1>
      </div>
    );
  } else {
    card = (
      <div className={"flex flex-col gap-2"}>
        <h1 className={"text-2xl font-bold text-center"}>{question}</h1>
      </div>
    );
  }

  const cardVariants = {
    selected: {
      rotateX: [180, 0],
      transition: { duration: 0.3 },
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    notSelected: {
      rotateX: [180, 0],
      transition: { duration: 0.3 },
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    },
  };

  function onDragEnd(info: any) {
    if (info.offset.x > 100) {
      //swiped left
      dispatch(correctAnswer());
      dispatch(nextFlashcard());
    } else if (info.offset.x < -100) {
      //swiped right
      dispatch(wrongAnswer());
      dispatch(nextFlashcard());
    }
  }

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #e92560 0%, #e92549 100%)",
    "linear-gradient(180deg,#2562E9 0%, #252FE9 100%)",
    "linear-gradient(180deg, #25e928 0%, #25e946 100%)",
  ]);

  return (
    <motion.div
      drag={"x"}
      style={{ x, background }}
      dragConstraints={{ left: 0, right: 0 }}
      whileTap={{ scale: 0.9 }}
      variants={cardVariants}
      animate={
        useSelector(isCurrentFlashcardFlipped) ? "selected" : "notSelected"
      }
      onClick={() => dispatch(flipCurrentFlashcard())}
      onDragEnd={(event, info) => onDragEnd(info)}
      className={
        "my-20 rounded-xl p-1 cursor-pointer w-3/4 mx-auto h-96 flex flex-col justify-center items-center shadow-2xl"
      }
    >
      <div
        className={
          "p-5 bg-white rounded-xl h-96 w-full flex flex-col justify-between items-center text-black"
        }
      >
        <div>1/10</div>

        { useSelector(isCurrentFlashcardFlipped) ? (
            <div className={`flex flex-col gap-2`}>
              <h1 className={"text-2xl font-bold"}>{answer}</h1>
            </div>
        ) : (
            <div className={"flex flex-col gap-2"}>
              <h1 className={"text-2xl font-bold"}>{question}</h1>
            </div>
        )}

        <div></div>
      </div>
    </motion.div>
  );
};

export default GameCard;
