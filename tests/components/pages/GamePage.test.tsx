import {render, screen, waitFor} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import GamePage from "@/components/pages/GamePage";

//TODO: Redux testing - mocked Redux store and API calls

vi.mock("@/components/ui/BackHomeButton", () => {
  return {
    default: () => <div data-testid="back-home-button">Back Home Button</div>,
  };
});

vi.mock("@/components/game/Game", () => {
  return {
    default: () => <div data-testid="game">Game</div>,
  };
});

describe("GamePage component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/game/test-deck-id"]}>
          <Routes>
            <Route path="/game/:deckId" element={<GamePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

    it("should render the BackHomeButton component", async () => {
        await waitFor(() => {
            const backHomeButton = screen.getByTestId("back-home-button");
            expect(backHomeButton).toBeInTheDocument();
        });
    });

    it("should render the Game component", async () => {
        await waitFor(() => {
            const game = screen.getByTestId("game");
            expect(game).toBeInTheDocument();
        });
    });
});
