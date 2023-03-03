import { LayoutGroup, motion } from "framer-motion";
import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useGetDecksQuery } from "../../features/deck/deckSlice";

const DeckSelector: FC = () => {
  const [selectedDeck, setSelectedDeck] = useState(null);

  const { data, isLoading, isSuccess } = useGetDecksQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <nav className={"max-w-xl mx-auto"}>
          <ul className={"w-full"}>
            <LayoutGroup>
              {data.map((deck: any) => (
                <motion.li
                    layout
                  key={deck.id}
                  className={
                    "m-4 bg-white shadow-lg rounded-xl cursor-pointer p-3 overflow-hidden"
                  }
                  style={{
                      height: deck.id !== selectedDeck ? "7.5em" : "auto",
                  }}
                  onClick={() => {
                      if(deck.id === selectedDeck) {
                            setSelectedDeck(null);
                      }
                        else {
                            setSelectedDeck(deck.id);
                      }
                  }}
                >
                  <div
                    className={"flex items-center gap-3"}
                  >
                    <div
                      className={
                        "w-24 h-24 bg-red-50 rounded-xl flex justify-center items-center"
                      }
                    >
                      <p className={"text-3xl"}>🔥</p>
                    </div>
                    <div>
                      <h3 className={"font-medium flex-1 text-xl text-center"}>
                        {deck.name}
                      </h3>
                      <p className={"text-slate"}>
                        {deck.flashcards.length} questions
                      </p>
                    </div>
                  </div>
                  <div>
                    {deck.flashcards.map((flashcard: any) => (
                      <div
                        key={flashcard.id}
                        className={
                          "flex flex-col gap-2 bg-gray-100 p-2 rounded-lg my-3"
                        }
                      >
                        <p className={"font-medium"}>{flashcard.question}</p>
                        <p className={"text-slate"}>{flashcard.answer}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/learning/${deck.id}`}
                    className={
                      "bg-quizBlue text-white font-medium text-center w-full p-3 rounded-lg mx-auto block w-full"
                    }
                  >
                    Start learning
                  </Link>
                </motion.li>
              ))}
            </LayoutGroup>
          </ul>
        </nav>

        <div className={""}>
          <Outlet />
        </div>
      </div>
    );
  }

  return <div>Error</div>;
};

export default DeckSelector;
