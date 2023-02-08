import { FC } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useGetDecksQuery } from "../../features/deck/deckSlice";

const DeckSelector: FC = () => {
  const { deckId } = useParams();

  const { data, isLoading, isSuccess } = useGetDecksQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <div className={"mx-auto text-center text-2xl font-bold"}>
          <h2>Select a deck</h2>
        </div>

        <nav className={"max-w-2xl mx-auto"}>
          <ul className={"w-full"}>
            {data.map((deck: any) => (
              <li key={deck.id} className={"m-4"}>
                <Link to={`${deck.id}`}>
                  <h3
                    className={`flex-1 font-semibold text-xl cursor-pointer ${
                      deckId === deck.id
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white hover:bg-gray-300"
                    }  text-center p-4 rounded-lg shadow-lg  transition-all duration-200`}
                  >
                    {deck.name}
                  </h3>
                </Link>
              </li>
            ))}
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
