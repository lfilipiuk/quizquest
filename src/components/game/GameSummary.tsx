import {FC} from "react";
import {iconSelector} from "../../utils/helpers";
import {
    getCorrectAnswersCount,
    getDeckName,
    getFlashcardsCount, getGameFlashcards,
    getWrongAnswersCount,
    reviseMistakes
} from "../../features/game/gameSlice";
import {useDispatch, useSelector} from "react-redux";



const GameSummary : FC = () => {
    const dispatch = useDispatch();
    const deckName = useSelector(getDeckName);
    const correctAnswers = useSelector(getCorrectAnswersCount);
    const wrongAnswers = useSelector(getWrongAnswersCount);
    const flashcardsCount = useSelector(getFlashcardsCount);
    const gameFlashcards = useSelector(getGameFlashcards);

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
    )
}

export default GameSummary;