import { render, screen, fireEvent } from '@testing-library/react';
import EditProfileInstitutionComponent from '../components/EditProfileInstitution';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Edit Profile Institution", () => {
    it("should render single empty field", () => {
        const list_items = [{
            role: "",
            institution_name: ""
        }];

        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByPlaceholderText("Tuliskan Peran")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Tuliskan Instansi SPBE")).toBeInTheDocument();

    });

    it("should add field on plus button click", () => {
        const list_items = [
            {
                role: "",
                institution_name: ""
            }
        ];
        const addField = jest.fn(() => [...list_items, {
            role: "",
            institution_name: ""
        }])

        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
                        addField={addField}
                    />
                </Switch>
            </BrowserRouter>
        );
        fireEvent.click(container.getElementsByClassName('fa-plus')[0]);
        expect(addField).toHaveBeenCalledTimes(1);

        expect(addField().length).toBe(2);
    });

    it("should delete field on minus button click", () => {
        const list_items = [
            {
                role: "",
                institution_name: ""
            },
            {
                role: "",
                institution_name: ""
            }
        ];
        const deleteField = jest.fn(() => [{
            role: "",
            institution_name: ""
        }])

        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
                        deleteField={deleteField}
                    />
                </Switch>
            </BrowserRouter>
        );
        fireEvent.click(container.getElementsByClassName('fa-minus')[0]);
        expect(deleteField).toHaveBeenCalledTimes(1);

        expect(deleteField().length).toBe(1);
    });

    it("should show error if not all fields are filled", () => {
        const handleInputChange = jest.fn(e => e.target.value);
        const list_items = [{
            role: "",
            institution_name: ""
        }];
        
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
                        handleInputChange={handleInputChange}
                    />
                </Switch>
            </BrowserRouter>
        );

        const role = container.querySelector("input[name='role']") as HTMLInputElement;

        fireEvent.change(role, {target: {value: "Asesor Eksternal"}});

        expect(handleInputChange).toBeCalledTimes(1);
    });

    it("should submit on button click", () => {
        const handleUpdateInstitutionData = jest.fn(() => true);
        const list_items = [
            {
                role: "",
                institution_name: ""
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
                        handleUpdateInstitutionData={handleUpdateInstitutionData}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diperbaharui/i)).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {
            name: /simpan/i
        }));

        expect(handleUpdateInstitutionData).toHaveBeenCalledTimes(1);
    });

    it("should show modal after submit", () => {
        const showModal = true;
        const list_items = [
            {
                role: "",
                institution_name: ""
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
                        showModal={showModal}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diperbaharui/i)).toBeInTheDocument();
    });

    it("redirect to profile page on modal close", () => {
        const showModal = true;
        const list_items = [
            {
                role: "",
                institution_name: ""
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileInstitutionComponent
                        list_items={list_items}
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