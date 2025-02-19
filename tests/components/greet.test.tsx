import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'


describe('Greet', () => {
    it('should render heading while name is provided', () => {
        const nameValue = 'name';
        render(<Greet name={nameValue} />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(nameValue);

    })

    it('should render button while name is not provided', () => {
        render(<Greet />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})