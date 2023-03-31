import {render, screen, within} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "@/components/pages/LandingPage";

describe("LandingPage component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
    });

    it("should render the header with title, subtitle, and start learning button", () => {
        const title = screen.getByText(/Become a top-tier/i);
        expect(title).toBeInTheDocument();

        const headerElement = screen.getByRole("banner");
        const subtitle = within(headerElement).getByText(/Quizzes to help you master development theory with ease/i);
        expect(subtitle).toBeInTheDocument();

        const startLearningButton = within(headerElement).getByRole("link", { name: /start learning/i });
        expect(startLearningButton).toBeInTheDocument();
        expect(startLearningButton).toHaveAttribute("href", "/home");
    });

    it("should render four LandingCard components", () => {
        const landingCards = screen.getAllByTestId("landing-card");
        expect(landingCards.length).toBe(4);
    });

    it("should render a footer with title, description, and start learning button", () => {
        const footerTitle = screen.getByText(/Ready to level up\?/i);
        expect(footerTitle).toBeInTheDocument();

        const footerElement = screen.getByRole("contentinfo");
        const footerDescription = within(footerElement).getByText(/Quizzes to help you master development theory with ease./i);
        expect(footerDescription).toBeInTheDocument();

        const footerStartLearningButton = screen.getAllByRole("link", { name: /start learning/i })[1];
        expect(footerStartLearningButton).toBeInTheDocument();
        expect(footerStartLearningButton).toHaveAttribute("href", "/home");
    });
});