import {Link, Outlet} from "react-router-dom";
import Header from "../components/ui/Header";
import {useSelector} from "react-redux";
import {selectAllFlashcards} from "../features/flashcard/flashcardSlice";

export default function Root() {
    const flashcardData = useSelector(selectAllFlashcards);

    return (
        <>
            <div className={''}>
                <Header/>

                <div className={'mx-auto text-center text-2xl p-4 font-bold'}>
                    <h2>Available decks</h2>
                </div>

                <nav className={'w-1/2 mx-auto'}>
                    <ul className={'w-full'}>
                        <li className={'m-2'}>
                            <Link to={`deck/css-fundamentals`}>
                                <h3 className={'flex-1 font-semibold text-xl cursor-pointer bg-gray-200 text-center p-4 rounded-lg shadow-lg hover:bg-gray-300 transition-all duration-200'}>
                                CSS Fundamentals
                                </h3>
                                </Link>
                        </li>
                        <li className={'m-2'}>
                            <Link to={`deck/html-fundamentals`}>
                                <h3 className={'flex-1 font-semibold text-xl cursor-pointer bg-gray-200 text-center p-4 rounded-lg shadow-lg hover:bg-gray-300 transition-all duration-200'}>
                                    HTML Fundamentals
                                </h3>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={'font-bold text-white'}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}