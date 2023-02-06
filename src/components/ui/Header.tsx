import {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div className={'w-full h-20 bg-blue-600 mb-10 flex items-center'}>
            <h1 className={'m-10 text-3xl text-white font-semibold'}>QuizQuest 🗂️</h1>
            <nav className={'mx-10 text-white font-semibold'}>
                <Link
                    className={'px-5 py-1 hover:bg-blue-700 transition-all duration-200 rounded-lg'}
                    to={'/'}>Home</Link>
                <Link
                    className={'px-5 py-1 hover:bg-blue-700 transition-all duration-200 rounded-lg'}
                    to={'/deck'}>Decks</Link>
            </nav>
        </div>
    );
}

export default Header;