import { render, screen, fireEvent } from '@testing-library/react';
import EditProfileBioComponent from '../components/EditProfileBio';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Edit Profile Biodata", () => {
    const name = "Alifah Basyasya";
    const contact_number = "081930390848";
    const email = "SomeEmail@gmail.com";
    const linkedin_profile = "SomeLinkedin";
    const address = "SomeAddress";
    const profile_picture_link = "SomeLink";

    it("should render pre filled name input", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByDisplayValue("Alifah Basyasya")).toBeInTheDocument();
    });

    it("should render pre filled contact input", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByDisplayValue("081930390848")).toBeInTheDocument();
    });

    it("should render pre filled email input", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByDisplayValue("081930390848")).toBeInTheDocument();
    });

    it("should render pre filled linkedin input", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByDisplayValue("SomeLinkedin")).toBeInTheDocument();
    });

    it("should render pre filled address input", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByDisplayValue("SomeAddress")).toBeInTheDocument();
    });

    it("should submit on button click", () => {
        const handleUpdateBiodata = jest.fn(() => true);
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                        handleUpdateBiodata={handleUpdateBiodata}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diperbaharui/i)).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {
            name: /simpan/i
        }));

        expect(handleUpdateBiodata).toHaveBeenCalledTimes(1);
    });

    it("should show modal after submit", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                        showModal={showModal}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diperbaharui/i)).toBeInTheDocument();
    });

    it("redirect to profile page on modal close", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileBioComponent
                        name={name}
                        contact_number={contact_number}
                        email={email}
                        linkedin_profile={linkedin_profile}
                        address={address}
                        profile_picture_link={profile_picture_link}
                        showModal={showModal}
                    />
                </Switch>
            </BrowserRouter>
        );
        const redirect = screen.getByRole("link", {
            name: /kembali/i
        });
        expect(redirect.getAttribute("href")).toBe("/profile");
    });
});