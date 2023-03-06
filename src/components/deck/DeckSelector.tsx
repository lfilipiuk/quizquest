import { LayoutGroup, motion } from "framer-motion";
import {FC, useRef, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import { useGetDecksQuery } from "../../features/deck/deckSlice";
import { iconSelector } from "../../utils/helpers";

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
                    "m-4 bg-white shadow-lg cursor-pointer p-3 overflow-hidden"
                  }
                  style={{
                    height: deck.id !== selectedDeck ? "7.5em" : "auto",
                    borderRadius: "12px",
                  }}
                  onClick={() => {
                    if (deck.id === selectedDeck) {
                      setSelectedDeck(null);
                    } else {
                      setSelectedDeck(deck.id);
                    }
                  }}
                >
                  <motion.div layout className={"flex items-center gap-3"}>
                    <div
                      style={{
                        backgroundColor: iconSelector(deck.name)
                          .backgroundColor,
                      }}
                      className={
                        "w-24 h-24 rounded-lg flex justify-center items-center select-none"
                      }
                    >
                      <p className={"text-3xl"}>
                        {iconSelector(deck.name).emoji}
                      </p>
                    </div>
                    <div>
                      <h3 className={"font-medium flex-1 text-xl text-center"}>
                        {deck.name}
                      </h3>
                      <p className={"text-slate"}>
                        {deck.flashcards.length} questions
                      </p>
                    </div>
                  </motion.div>

                  {deck.id === selectedDeck ? (
                    <motion.div className={"mt-4"} layout>
                      <Link
                        to={`/learning/${deck.id}`}
                        className={
                          "bg-quizBlue text-white font-medium text-center w-full p-3 rounded-lg mx-auto block w-full"
                        }
                      >
                        Start learning
                      </Link>
                    </motion.div>
                  ) : null}

                  <div>
                    {deck.id === selectedDeck
                      ? deck.flashcards.map((flashcard: any) => (
                          <motion.div
                            layout
                            key={flashcard.id}
                            className={
                              "flex flex-col gap-2 bg-gray-100 p-2 rounded-lg my-3"
                            }
                          >
                            <p className={"font-medium"}>
                              {flashcard.question}
                            </p>
                            <p className={"text-slate"}>{flashcard.answer}</p>
                          </motion.div>
                        ))
                      : null}
                  </div>
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
