import { render, screen } from '@testing-library/react';
import TutorialComponent from '../components/Tutorial';

describe("Tutorial", () => {
    it("should render all tutorial tabs", () => {
        render(<TutorialComponent />);
        expect(screen.getAllByRole("tab")).toHaveLength(8);
    });

    it("should render first tab active by default", () => {
        render(<TutorialComponent />);
        expect(screen.getAllByRole("tab")[0]).toHaveClass("active");
    });
});