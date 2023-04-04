import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameFinished from "@/components/game/GameFinished";

describe("GameFinished", () => {
  it("renders game finished header and back to home link", () => {
    render(
      <BrowserRouter>
        <GameFinished />
      </BrowserRouter>
    );

    const gameFinishedHeader = screen.getByText("Game Finished");
    const backButton = screen.getByText("Back to home");

    expect(gameFinishedHeader).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();

    const linkElement = backButton.closest("a");
    expect(linkElement).toHaveAttribute("href", "/home");
  });
});
