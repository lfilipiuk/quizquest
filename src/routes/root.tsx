import {Link, Outlet, useParams} from "react-router-dom";
import Header from "../components/ui/Header";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlashcardData, selectAllFlashcards} from "../features/flashcard/flashcardSlice";
import {formatCategory} from "../utils/helpers";
import {useEffect} from "react";

export default function Root() {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchFlashcardData() as any);
    }, [dispatch]);


    return (
        <>
            <div className={''}>
                <Header/>
                <div className={''}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}