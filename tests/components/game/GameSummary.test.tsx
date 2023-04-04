import { renderWithProviders } from "@/utils/test-utils";
import GameSummary from "@/components/game/GameSummary";
import { setupStore } from "@/app/store";
import { BrowserRouter } from "react-router-dom";

vi.mock("react-confetti", () => {
  return {
    __esModule: true,
    default: vi.fn(),
  };
});

describe("GameSummary", () => {
  it("renders success message when all answers are correct", () => {
    const store = setupStore({
      game: {
        initialFlashcards: [],
        gameFlashcards: [
          {
            id: 1,
            question: "Question 1",
            answer: "Answer 1",
            status: "correct",
          },
          {
            id: 2,
            question: "Question 2",
            answer: "Answer 2",
            status: "correct",
          },
        ],
        currentFlashcard: 0,
        currentFlashcardIsFlipped: false,
        shuffleMode: false,
        showSummary: false,
        deckName: "Test Deck",
      },
    });

    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <GameSummary />
      </BrowserRouter>,
      { store }
    );

    const successMessage = getByText(
      "Congratulations! You've mastered Test Deck!"
    );
    expect(successMessage).toBeInTheDocument();
  });

  it("renders a list of wrong answers when not all answers are correct", () => {
    const store = setupStore({
      game: {
        initialFlashcards: [],
        gameFlashcards: [
          {
            id: 1,
            question: "Question 1",
            answer: "Answer 1",
            status: "wrong",
          },
          {
            id: 2,
            question: "Question 2",
            answer: "Answer 2",
            status: "correct",
          },
        ],
        currentFlashcard: 0,
        currentFlashcardIsFlipped: false,
        shuffleMode: false,
        showSummary: false,
        deckName: "Test Deck",
      },
    });

    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <GameSummary />
      </BrowserRouter>,
      { store }
    );

    const scoreMessage = getByText("You scored 1 out of 2!");
    expect(scoreMessage).toBeInTheDocument();

    const wrongAnswer1 = getByText("Question 1");

    expect(wrongAnswer1).toBeInTheDocument();
  });
});
