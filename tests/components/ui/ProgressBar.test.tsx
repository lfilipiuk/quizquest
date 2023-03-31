import { render, screen } from '@testing-library/react';
import ProgressBar from '@/components/ui/ProgressBar';

const defaultProps = {
    progress: [
        { status: 'correct' as 'correct', id: 1 },
        { status: 'wrong' as 'wrong', id: 2 },
        { status: 'current' as 'current', id: 3 },
        { status: 'not-answered' as 'not-answered', id: 4 },
    ],
};

describe('ProgressBar component', () => {
    it('should render progress items with correct background colors', () => {
        render(<ProgressBar {...defaultProps} />);

        const correctItem = screen.getByTestId(`progress-item-${defaultProps.progress[0].id}`);
        const wrongItem = screen.getByTestId(`progress-item-${defaultProps.progress[1].id}`);
        const currentItem = screen.getByTestId(`progress-item-${defaultProps.progress[2].id}`);
        const notAnsweredItem = screen.getByTestId(`progress-item-${defaultProps.progress[3].id}`);

        expect(correctItem).toHaveClass('bg-green-500');
        expect(wrongItem).toHaveClass('bg-red-500');
        expect(currentItem).toHaveClass('bg-blue-500');
        expect(notAnsweredItem).toHaveClass('bg-gray-300');
    });
});