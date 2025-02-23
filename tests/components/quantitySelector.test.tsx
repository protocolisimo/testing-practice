// should return default button if no products - check
// should return controls of the prodcut quantity
// should remove product if removeFromCart pressed 
// should return to default sate if products < 1
// should add product if addToCart pressed 

import { render, screen } from "@testing-library/react"
import { CartProvider } from "../../src/providers/CartProvider"
import QuantitySelector from "../../src/components/QuantitySelector"
import { Product } from "../../src/entities"

describe('QuantitySelector', () => {
    // create a function with all handlers and render function along with separete selector for each element
    // write tests which pull methods from that function to test specofoc features according to test needs


    function renderQuantitySelector () {
        const product: Product = {
            id: 1,
            name: 'name',
            price: 12,
            categoryId: 1
        }
        
        render(<CartProvider><QuantitySelector product={product} /></CartProvider>);


        const getAddButton = screen.getByRole('button', {name: /add/i});



        return {
            getAddButton
        }
    }


    it('should return default button if no products where added', () => {
        const {getAddButton} = renderQuantitySelector();

        
        expect(getAddButton).toBeInTheDocument()
    })

    it('should return controls of the prodcut quantity', () => {
        const product: Product = {
            id: 1,
            name: 'name',
            price: 12,
            categoryId: 1
        }
        render(<CartProvider><QuantitySelector product={product} /></CartProvider>);

        const button = screen.getByRole('button', {name: /add/i})

        expect(button).toBeInTheDocument()
    })
})  