import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities';


describe('userAccount' ,() => {
    const reqUserData: User = {
        name: 'name',
        id: 123
    };

    it('should show the use name',() => {
        render(<UserAccount user={reqUserData} />)

        const nameTextElement = screen.getByText(reqUserData.name);
        expect(nameTextElement).toBeInTheDocument();
    })

    it('should show edit button if isAdmin',() => {
        reqUserData.isAdmin = true;

        render(<UserAccount user={reqUserData} />)

        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
    })

    it('should not show edit button if not isAdmin',() => {
        reqUserData.isAdmin = false;

        render(<UserAccount user={reqUserData} />)

        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    })
})