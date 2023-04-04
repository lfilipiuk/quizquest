import gameSlice, {
    setDeckName,
    setGameData,
    flipCurrentFlashcard,
    nextFlashcard,
    correctAnswer,
    wrongAnswer,
    resetGame,
    reviseMistakes,
} from "@/features/game/gameSlice";

describe("gameSlice", () => {
    const initialState = {
        initialFlashcards: [],
        gameFlashcards: [],
        currentFlashcard: 0,
        currentFlashcardIsFlipped: false,
        shuffleMode: false,
        showSummary: false,
        deckName: "",
    };

    it("should return the initial state", () => {
        expect(gameSlice(undefined, {
            type: undefined
        })).toEqual(initialState);
    });


    const sampleInitialFlashcards = [
        { id: 1, question: "Question 1", answer: "Answer 1" },
        { id: 2, question: "Question 2", answer: "Answer 2" },
    ];

    const sampleGameFlashcards = [
        { id: 1, question: "Question 1", answer: "Answer 1", status: "current" },
        { id: 2, question: "Question 2", answer: "Answer 2", status: "unanswered" },
    ];

    it("should handle setDeckName action", () => {
        expect(gameSlice(initialState, setDeckName("Test Deck"))).toEqual({
            ...initialState,
            deckName: "Test Deck",
        });
    });

    it("should handle setGameData action", () => {


        expect(gameSlice(initialState, setGameData(sampleInitialFlashcards))).toEqual({
            ...initialState,
            initialFlashcards: sampleInitialFlashcards,
            gameFlashcards: sampleGameFlashcards,
        });
    });

    it("should handle flipCurrentFlashcard action", () => {
        expect(gameSlice(initialState, flipCurrentFlashcard())).toEqual({
            ...initialState,
            currentFlashcardIsFlipped: true,
        });
    });

    it("should handle nextFlashcard action", () => {
        const stateWithFlashcards = { ...initialState,gameFlashcards: sampleGameFlashcards };

        const updatedFlashcards = sampleGameFlashcards.map((flashcard) => {
            if (flashcard.id === 2) {
                return {
                    ...flashcard,
                    status: "current",
                };
            }
            return flashcard;
        });

        const stateAfterNextFlashcard = { ...initialState, gameFlashcards: updatedFlashcards };

        expect(gameSlice(stateWithFlashcards, nextFlashcard())).toEqual({
            ...stateAfterNextFlashcard,
            currentFlashcard: 1,
            currentFlashcardIsFlipped: false,
        });
    });
});