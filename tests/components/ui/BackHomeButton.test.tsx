import {render,screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import BackHomeButton from "@/components/ui/BackHomeButton";

describe('BackHomeButton component', () => {
    it('should render the back home button with text and icon', () => {
        render(
            <BrowserRouter>
                <BackHomeButton />
            </BrowserRouter>
        );
        const backButton = screen.getByText('Back to home');
        const backButtonIcon = screen.getByTestId('back-home-icon');
        expect(backButton).toBeInTheDocument();
        expect(backButtonIcon).toBeInTheDocument();
    });

    it('should have a link to the home page', () => {
        render(
            <BrowserRouter>
                <BackHomeButton />
            </BrowserRouter>
        );
        const linkElement = screen.getByText('Back to home').closest('a');
        expect(linkElement).toHaveAttribute('href', '/home');
    });
});