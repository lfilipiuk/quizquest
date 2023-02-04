import {FC} from "react";

const Header: FC = () => {
    return (
        <div className={'w-full h-10 bg-blue-600 mb-10 flex items-center'}>
            <h1 className={'p-2 text-xl text-white font-semibold'}>React Flashcards 🗂️</h1>
        </div>
    );
}

export default Header;