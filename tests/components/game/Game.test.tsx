import { configureStore } from "@reduxjs/toolkit";
import { renderWithProviders } from "../../../src/utils/test-utils";
import Game from "../../../src/components/game/Game";
import { act, fireEvent, waitFor, screen } from "@testing-library/react";
import { setupStore } from "../../../src/app/store";

describe("Game", () => {
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

  it("renders without crashing", () => {
    renderWithProviders(<Game />, { store });
  });

  it("marks the current card as incorrect and proceeds to the next card when the 'Not yet' button is clicked", async () => {
    renderWithProviders(<Game />, { store });
    const notYetButton = screen.getByText("Not yet");
    act(() => {
      fireEvent.click(notYetButton);
    });

    // Add assertions to check if the card is marked as incorrect and the next card is shown
    const question = screen.getByText("Question 2");
    const progressItem = screen.getByTestId("progress-item-1")

    await waitFor(
      () => {
        expect(question).toBeInTheDocument();
        expect(progressItem).toHaveClass("bg-red-500");
      },
      { timeout: 2000 }
    );
  });

  it("marks the current card as correct and proceeds to the next card when the 'I know this' button is clicked", async () => {
    renderWithProviders(<Game/>, {store});
    const iKnowThisButton = screen.getByText("I know this");
    act(() => {
      fireEvent.click(iKnowThisButton);
    });

    // Add assertions to check if the card is marked as incorrect and the next card is shown
    const question = screen.getByText("Question 2");
    const progressItem = screen.getByTestId("progress-item-1")

    await waitFor(
        () => {
          expect(question).toBeInTheDocument();
            expect(progressItem).toHaveClass("bg-green-500");
        },
        {timeout: 2000}
    );
  });
});
