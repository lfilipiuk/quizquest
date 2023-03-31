import { render, screen} from "@testing-library/react";
import LandingCard from "@/components/ui/LandingCard";

const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    image: 'test-image-url',
    background: 'bg-blue-500',
};

describe('LandingCard component', () => {
    it('should render the title and subtitle', () => {
        render(<LandingCard {...defaultProps} />);
        const titleElement = screen.getByText(defaultProps.title);
        const subtitleElement = screen.getByText(defaultProps.subtitle);
        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });

    it('should render the image with alt text', () => {
        render(<LandingCard {...defaultProps} />);
        const imageElement = screen.getByAltText(`quizquest promo image ${defaultProps.title}`);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', defaultProps.image);
    });

    it('should apply the background class', () => {
        render(<LandingCard {...defaultProps} />);
        const backgroundImage = screen.getByTestId('background-image');
        expect(backgroundImage).toHaveClass(defaultProps.background);
    });
});