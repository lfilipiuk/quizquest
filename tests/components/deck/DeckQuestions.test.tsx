import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "@/app/store";
import { DeckQuestions } from "@/components/deck/DeckQuestions";
import React from "react";
import { vi } from "vitest";

vi.mock("@/features/deck/deckSlice", () => {
  const getActualDeckSlice = () => {
    return vi.importActual("@/features/deck/deckSlice");
  };

  const actualDeckSlice = getActualDeckSlice();

  const mockUseGetDecksQuery = () => ({
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
  });

  return {
    ...actualDeckSlice,
    useGetDecksQuery: mockUseGetDecksQuery,
  };
});

describe("DeckQuestions component", () => {
  it("should render deck questions", () => {
    render(
      <Provider store={store}>
        <Router initialEntries={["/deck/1"]}>
          <Routes>
            <Route path="/deck/:deckId" element={<DeckQuestions />} />
          </Routes>
        </Router>
      </Provider>
    );

    expect(screen.getByText("Let's learn")).toBeInTheDocument();
    expect(screen.getByText("Question 1")).toBeInTheDocument();
    expect(screen.getByText("Answer 1")).toBeInTheDocument();
    expect(screen.getByText("Question 2")).toBeInTheDocument();
    expect(screen.getByText("Answer 2")).toBeInTheDocument();
  });
});
