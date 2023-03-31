import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LinkButton from '@/components/ui/LinkButton';
import {vi} from "vitest";

const defaultProps = {
    onClick: vi.fn(),
    children: 'Test Button',
};

describe('LinkButton component', () => {
    beforeEach(() => {
        defaultProps.onClick.mockReset();
    });

    it('should render a button with text and an onClick handler', () => {
        render(<LinkButton onClick={defaultProps.onClick}>{defaultProps.children}</LinkButton>);

        const buttonElement = screen.getByText(defaultProps.children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('bg-blue-600');

        fireEvent.click(buttonElement);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('should render a link with text and an onClick handler when link prop is provided', () => {
        const linkProp = '/test-link';
        render(
            <BrowserRouter>
                <LinkButton onClick={defaultProps.onClick} link={linkProp}>{defaultProps.children}</LinkButton>
            </BrowserRouter>
        );

        const linkElement = screen.getByText(defaultProps.children);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass('bg-blue-600');
        expect(linkElement.closest('a')).toHaveAttribute('href', linkProp);

        fireEvent.click(linkElement);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });
});