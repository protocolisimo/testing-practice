import { render, screen } from "@testing-library/react"
import UserList from "../../src/components/UserList"
import { User } from "../../src/entities"

describe('UserList', () => {
    it('Should render no users string if no user list is empty ', () => {
        render(<UserList users={[]} />)

        const textElement = screen.getByText(/no users/i)

        expect(textElement).toBeInTheDocument();
    })

    it('Should render user list if no user list is provided ', () => {
        const mockedUserList: User[] = [
            {
                id: 1,
                name: 'name',
                isAdmin: true,
            },
            {
                id: 2,
                name: 'name1',
                isAdmin: false,
            }
        ]

        render(<UserList users={mockedUserList} />)

        mockedUserList.forEach((user) => {
            const linkElement = screen.getByRole('link', {name: user.name})
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})