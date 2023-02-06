import {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div className={'w-full h-10 bg-blue-600 mb-10 flex items-center'}>
            <h1 className={'p-2 text-xl text-white font-semibold'}>React Flashcards 🗂️</h1>
            <nav className={'mx-10 text-white font-semibold'}>
                <Link
                    className={'px-2 py-1 hover:bg-blue-700 transition-all duration-200 rounded-lg'}
                    to={'/'}>Home</Link>
                <Link
                    className={'px-2 py-1 hover:bg-blue-700 transition-all duration-200 rounded-lg'}
                    to={'/deck'}>Decks</Link>
            </nav>
        </div>
    );
}

export default Header;