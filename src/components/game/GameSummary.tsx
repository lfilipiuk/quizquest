import {FC} from "react";
import {iconSelector} from "@/utils/helpers";
import {
    getCorrectAnswersCount,
    getDeckName,
    getFlashcardsCount, getGameFlashcards,
    getWrongAnswersCount,
    reviseMistakes
} from "@/features/game/gameSlice";
import {useDispatch, useSelector} from "react-redux";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {Link} from "react-router-dom";

const GameSummary : FC = () => {
    const dispatch = useDispatch();
    const deckName = useSelector(getDeckName);
    const correctAnswers = useSelector(getCorrectAnswersCount);
    const wrongAnswers = useSelector(getWrongAnswersCount);
    const flashcardsCount = useSelector(getFlashcardsCount);
    const gameFlashcards = useSelector(getGameFlashcards);
    const { width, height } = useWindowSize()

    if(correctAnswers === flashcardsCount) {
        return(
        <div className={"gap-2 max-w-2xl my-52 mx-auto flex flex-col items-center justify-center"}>
            <h1 className={"text-3xl mx-auto text-center"}>
                Congratulations! You've mastered {deckName}!
            </h1>
            <Confetti
                width={width}
                height={height}
            />
            <Link
                to={"/home"}
                className="bg-quizBlue text-white text-center rounded-full p-2 w-40 my-5 hover:-translate-y-1 transform transition duration-200 ease-in-out"
            >
                More decks
            </Link>
        </div>
        )
    }

    return (
        <div className={"flex flex-col gap-2 max-w-2xl my-10 mx-auto relative"}>
            <h1 className={"text-3xl mx-auto"}>
                You scored {correctAnswers} out of {flashcardsCount}!
            </h1>
            <h2 className={"text-xl text-slate mx-auto px-2 text-center md:px-0"}>
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
    )
}

export default GameSummary;