import { render, screen } from '@testing-library/react';
import LoginComponent from '../components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe("Login", () => {
    it("should render google button by default", () => {
        render(
            <GoogleOAuthProvider clientId="657950965679-e0t64efubu8769a9du5c09vkke359ek9.apps.googleusercontent.com">
                <LoginComponent />
            </GoogleOAuthProvider>
        );
        expect(screen.getByText("Masuk dengan Google")).toBeInTheDocument();
    });

    it("should render half width image by default", () => {
        const { container } = render(
            <GoogleOAuthProvider clientId="657950965679-e0t64efubu8769a9du5c09vkke359ek9.apps.googleusercontent.com">
                <LoginComponent />
            </GoogleOAuthProvider>
        );
        expect(container.querySelector("img") as HTMLImageElement).toHaveClass("w-50");
    });
});