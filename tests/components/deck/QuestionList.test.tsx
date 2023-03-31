import { render, screen } from '@testing-library/react';
import QuestionList, {FlashcardItem} from '@/components/deck/QuestionList';

describe('QuestionList component', () => {
    const mockFlashcards : any[] = [
        {
            id: 1,
            question: 'What is the capital of Poland?',
            answer: 'Warsaw',
            status: 'none',
        },
        {
            id: 2,
            question: 'What is the capital of Ukraine?',
            answer: 'Kyiv',
            status: 'none',
        },
    ];

    it('should render loading when deck is not provided', () => {
        render(<QuestionList/>);
        const loadingElement = screen.getByText('Loading...');
        expect(loadingElement).toBeInTheDocument();
    });

    it('should render a list of questions and answers when deck is provided', () => {
        render(<QuestionList deck={mockFlashcards} />);

        const questionElements = screen.getAllByRole('listitem');
        expect(questionElements.length).toBe(mockFlashcards.length);

        mockFlashcards.forEach((flashcard) => {
            const questionElement = screen.getByText(flashcard.question);
            const answerElement = screen.getByText(flashcard.answer);
            expect(questionElement).toBeInTheDocument();
            expect(answerElement).toBeInTheDocument();
        });
    });
});