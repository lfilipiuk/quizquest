import { render, screen } from "@testing-library/react";
import HomePage from "@/components/pages/HomePage";
vi.mock("@/components/deck/DeckSelector", () => {
    return {
        default: () => <div data-testid="deck-selector">Deck Selector</div>,
    };
});

describe("HomePage component", () => {
    beforeEach(() => {
        render(<HomePage />);
    });

    it("should render the header with title and subtitle", () => {
        const title = screen.getByText(/Welcome to QuizQuest/i);
        expect(title).toBeInTheDocument();

        const subtitle = screen.getByText(/Select a deck to get started./i);
        expect(subtitle).toBeInTheDocument();
    });

    it("should render the DeckSelector component", () => {
        const deckSelector = screen.getByTestId("deck-selector");
        expect(deckSelector).toBeInTheDocument();
    });
});