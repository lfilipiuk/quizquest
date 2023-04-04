import {render, screen} from "@testing-library/react";
import React from "react";
import DeckSelector from "@/components/deck/DeckSelector";
import {renderWithProviders} from "../../../src/utils/test-utils";

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
}

test('Uses preloaded state to render', () => {
    const initialTodos = [{ id: 5, text: 'Buy Milk', completed: false }]

    const { getByText } = renderWithProviders(<DeckSelector />, {
        preloadedState: mockState,
    })
})