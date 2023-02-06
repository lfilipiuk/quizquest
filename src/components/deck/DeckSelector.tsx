import {FC} from "react";
import {formatCategory} from "../../utils/helpers";
import {Link, Outlet, useParams} from "react-router-dom";

const DeckSelector:FC = () => {
    const decks = ['CSS Fundamentals', 'HTML Fundamentals'];
    const {deckId} = useParams();

    return (
        <div>
            <div className={'mx-auto text-center text-2xl font-bold'}>
                <h2>Select a deck</h2>
            </div>

            <nav className={'max-w-2xl mx-auto'}>
                <ul className={'w-full'}>
                    {decks.map((deck) => (
                        <li key={formatCategory(deck)} className={'m-4'}>
                            <Link to={`${deck.toLowerCase().replace(" ", "-")}`}>
                                <h3 className={`flex-1 font-semibold text-xl cursor-pointer ${(deckId === formatCategory(deck)) ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white hover:bg-gray-300" }  text-center p-4 rounded-lg shadow-lg  transition-all duration-200`}>
                                    {deck}
                                </h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={''}>
                <Outlet/>
            </div>
        </div>
    )
}

export default DeckSelector;