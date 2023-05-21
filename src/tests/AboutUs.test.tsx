import { render, screen } from '@testing-library/react';
import AboutUsComponent from '../components/AboutUs';

describe("About Us", () => {
    it("should render button by default", () => {
        render(<AboutUsComponent showLink={false} />);
        expect(screen.getByText(/lanjut baca/i)).toBeInTheDocument();
    });

    it("should render link when button is clicked", () => {
        render(<AboutUsComponent showLink={true}  />);
        expect(screen.getByText(/Alifah/i)).toBeInTheDocument();
    });
});