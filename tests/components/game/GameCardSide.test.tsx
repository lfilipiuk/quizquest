import React from "react";
import { screen } from "@testing-library/react";
import GameCardSide from "@/components/game/GameCardSide";
import { renderWithProviders } from "../../../src/utils/test-utils";

const mockState = {
  data: [
    {
      id: "1",
      name: "Deck 1",
      flashcards: [
        { id: "1", question: "Question 1", answer: "Answer 1" },
        { id: "2", question: "Question 2", answer: "Answer 2" },
      ],
    },
    {
      id: "2",
      name: "Deck 2",
      flashcards: [
        { id: "3", question: "Question 3", answer: "Answer 3" },
        { id: "4", question: "Question 4", answer: "Answer 4" },
      ],
    },
  ],
  isLoading: false,
  isSuccess: true,
};

describe("GameCardSide", () => {
  it("renders with the correct text", () => {
    const text = "Test text";
    renderWithProviders(<GameCardSide text={text} />, {
      preloadedState: mockState,
    });
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
