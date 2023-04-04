import {act, screen, waitFor} from "@testing-library/react";
import GameCard from "@/components/game/GameCard";
import { renderWithProviders } from "@/utils/test-utils";
import React from "react";
import {flipCurrentFlashcard} from "@/features/game/gameSlice";
import {setupStore} from "@/app/store";

describe("GameCard", () => {
  it("renders question and answer", () => {
    renderWithProviders(<GameCard question="Question" answer="Answer" />, {
      preloadedState: {},
    });

    const questionText = screen.getByText("Question");
    const answerText = screen.getByText("Answer");

    expect(questionText).toBeInTheDocument();
    expect(answerText).toBeInTheDocument();
  });

    it('rotates the card when flipped', async () => {
        const store = setupStore();

        renderWithProviders(<GameCard question="Question" answer="Answer"/>, {store});

        const cardSideAnswer = screen.getByText('Answer');
        const cardSideQuestion = screen.getByText('Question');

        expect(cardSideAnswer.parentElement).toHaveStyle('transform: rotateY(180deg) translateZ(0)');
        expect(cardSideQuestion.parentElement).toHaveStyle('transform: none');

        act(() => store.dispatch(flipCurrentFlashcard()));

        const flippedCardSideAnswer = screen.getByText('Answer');
        const flippedCardSideQuestion = screen.getByText('Question');

        await waitFor(() => {
            expect(flippedCardSideQuestion.parentElement).toHaveStyle('transform: rotateY(180deg) translateZ(0)');
            expect(flippedCardSideAnswer.parentElement).toHaveStyle('transform: none');
        }, {timeout: 1000});

    });
});
