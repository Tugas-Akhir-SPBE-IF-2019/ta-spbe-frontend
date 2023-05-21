import { render, screen, fireEvent } from '@testing-library/react';
import AboutUsComponent from '../components/AboutUs';

describe("<AboutUsContainer />", () => {
    it("render button by default", () => {
        render(<AboutUsComponent showLink={false} />);
        expect(screen.getByText(/lanjut baca/i)).toBeInTheDocument();
    });

    it("render link when button is clicked", () => {
        render(<AboutUsComponent showLink={true}  />);
        expect(screen.getByText(/Alifah/i)).toBeInTheDocument();
    });
});