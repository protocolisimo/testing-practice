import { render, screen } from "@testing-library/react"
import ProductImageGallery from "../../src/components/ProductImageGallery"

describe('productImageGallery', () => {

    it('Should be null if no imagies are empty', () => {
        const {container} = render(<ProductImageGallery imageUrls={[]} />);

        expect(container).toBeEmptyDOMElement();
    })

    it('Should render list of imagies if are some provided', () => {
        const imagiesArray = ['url1', 'url2']
        render(<ProductImageGallery imageUrls={imagiesArray} />);

        const images = screen.getAllByRole('img');

        expect(images).toHaveLength(imagiesArray.length);
        imagiesArray.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url);
        })
    

    })


})