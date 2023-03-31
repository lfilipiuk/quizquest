import {render, screen} from "@testing-library/react";
import Header from "@/components/ui/Header";

describe('Header component', () => {
    it('should render the logo', () => {
        render(<Header />);
        const logoElement = screen.getByAltText('quizquest logo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('src');
    });

    it('should have "mx-auto" class for the logo', () => {
        render(<Header />);
        const logoElement = screen.getByAltText('quizquest logo');
        expect(logoElement).toHaveClass('mx-auto');
    });
});