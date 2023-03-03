import DeckSelector from "../deck/DeckSelector";

const HomePage = () => {
    return (
        <>
            <div className={"max-w-4xl mx-auto"}>
                <header className={"flex flex-col gap-5 my-10"}>
                    <h1 className={"font-medium text-center text-4xl mx-auto w-3/4 mt-4"}>
                        Welcome to QuizQuest
                    </h1>
                    <p className={"text-slate text-center text-xl w-3/5 mx-auto my-1"}>
                        Select a deck to get started.
                    </p>
                </header>
            </div>

            <DeckSelector />
        </>
    );

}

export default HomePage;