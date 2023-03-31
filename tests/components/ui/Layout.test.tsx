import { render, screen} from "@testing-library/react";
import Layout from "@/components/ui/Layout";
const TestComponent = () => <div data-testid="test-component">Test Component Content</div>;

describe('Layout component', () => {
    it('should render Header, Footer, and children components', () => {
        render(
            <Layout>
                <TestComponent />
            </Layout>
        );

        const headerElement = screen.getByAltText('quizquest logo');
        const footerElement = screen.getByText('QuizQuest 2023, made by Łukasz Filipiuk');
        const testComponentElement = screen.getByTestId('test-component');

        expect(headerElement).toBeInTheDocument();
        expect(footerElement).toBeInTheDocument();
        expect(testComponentElement).toBeInTheDocument();
    });
});