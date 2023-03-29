import { render, screen } from "@testing-library/react";
import Footer from "../../../src/components/ui/Footer";


describe("Footer component", () => {
    it("renders the footer text", () => {
        render(<Footer />);

        const headerText = screen.getByText(/QuizQuest 2023, made by Łukasz Filipiuk/i);
        expect(headerText).toBeDefined();
    });

    it("has the correct CSS classes", () => {
        render(<Footer />);

        const footerDiv = screen.getByTestId("footer");
        expect(footerDiv).toHaveClass("text-slate text-center mt-10");
    });
});