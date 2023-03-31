import { render, screen } from '@testing-library/react';
import QuestionListItem from '@/components/deck/QuestionListItem';

describe('QuestionListItem component', () => {
    const defaultProps = {
        question: 'What is the capital of Poland?',
        answer: 'Warsaw',
        status: 'none' as 'none',
    };

    it('should render a question and answer with default status', () => {
        render(<QuestionListItem {...defaultProps} />);

        const questionElement = screen.getByText(defaultProps.question);
        const answerElement = screen.getByText(defaultProps.answer);
        const listItemElement = screen.getByRole('listitem');

        expect(questionElement).toBeInTheDocument();
        expect(answerElement).toBeInTheDocument();
        expect(listItemElement).toHaveClass('bg-gray-100');
    });

    it('should render a question and answer with correct status', () => {
        render(<QuestionListItem {...defaultProps} status="correct" />);

        const listItemElement = screen.getByRole('listitem');
        expect(listItemElement).toHaveClass('bg-green-100');
    });

    it('should render a question and answer with wrong status', () => {
        render(<QuestionListItem {...defaultProps} status="wrong" />);

        const listItemElement = screen.getByRole('listitem');
        expect(listItemElement).toHaveClass('bg-red-100');
    });
});