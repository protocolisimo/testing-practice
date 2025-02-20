import { render, screen } from "@testing-library/react"
import TermsAndConditions from "../../src/components/TermsAndConditions"
import userEvent from "@testing-library/user-event"


// check is there is an input and a button 
// check that button is disabled as default 
// check if button became enabled after switching the input

describe('TermsAndConditions', () => {
    it('Should have correct default states', () => {
        render(<TermsAndConditions />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeDisabled();
    })

    it('Should have correct states after user click the checkbox', async () => {
        render(<TermsAndConditions />)

        const user = userEvent.setup()

        const checkBox = screen.getByRole('checkbox')

        await user.click(checkBox)
        
        expect(screen.getByRole('button')).toBeEnabled();
    })
})