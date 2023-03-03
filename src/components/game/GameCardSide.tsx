import { FC } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  correctAnswer,
  flipCurrentFlashcard,
  nextFlashcard,
  wrongAnswer,
} from "../../features/game/gameSlice";

interface GameCardSideProps {
  text: string;
  side?: "A" | "B";
}

const GameCardSide: FC<GameCardSideProps> = ({
  text,
  side,
}: GameCardSideProps) => {
  const dispatch = useDispatch();

  const cardVariants = {
    A: {
      rotateY: [0, 180],
      transition: { duration: 0.3 },
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    B: {
      rotateY: [180, 0],
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
  // const background = useTransform(x, xInput, [
  //   "linear-gradient(180deg, #e92560 0%, #e92549 100%)",
  //   "linear-gradient(180deg,#2562E9 0%, #252FE9 100%)",
  //   "linear-gradient(180deg, #25e928 0%, #25e946 100%)",
  // ]);

  return (
    <motion.div
      drag={"x"}
      // style={{ x, background }}
      dragConstraints={{ left: 0, right: 0 }}
      whileTap={{ scale: 0.9 }}
      variants={cardVariants}
      animate={side}
      onClick={() => dispatch(flipCurrentFlashcard())}
      onDragEnd={(event, info) => onDragEnd(info)}
      className={
        "my-20 rounded-xl p-1 cursor-pointer w-3/4 mx-auto h-80 flex flex-col justify-center items-center shadow-2xl absolute backface-hidden bg-white"
      }
    >
          <h1 className={"text-2xl text-center"}>{text}</h1>
    </motion.div>
  );
};

export default GameCardSide;
