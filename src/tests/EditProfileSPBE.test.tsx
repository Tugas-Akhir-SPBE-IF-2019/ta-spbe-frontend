import { render, screen, fireEvent } from '@testing-library/react';
import EditProfileSPBEComponent from '../components/EditProfileSPBE';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Edit Profile SPBE", () => {
    it("should render supplied evaluation data", () => {
        const list_items = [{
            role: "Asesor Eksternal",
            institution_id: "1",
            evaluation_year: "2020",
        }];
        const institutionListResponse = [{
            id: "1",
            institution_name: "Test Institution"
        }]

        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
                        list_items={list_items}
                        institutionListResponse={institutionListResponse}
                    />
                </Switch>
            </BrowserRouter>
        );

        const role = screen.getByPlaceholderText("Tuliskan Peran") as HTMLInputElement;
        const institution = screen.getByRole("option", {
            name: "Test Institution"
        }) as HTMLOptionElement;
        const year = screen.getByPlaceholderText("Tuliskan Tahun Evaluasi") as HTMLInputElement;

        expect(role.value).toBe("Asesor Eksternal");
        expect(institution.selected).toBe(true);
        expect(year.value).toBe("2020");
    });

    it("should add field on plus button click", () => {
        const list_items = [
            {
                role: "",
                institution_id: "",
                evaluation_year: "",
            }
        ];
        const addField = jest.fn(() => [...list_items, {
            role: "",
            institution_id: "",
            evaluation_year: "",
        }])

        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
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
                institution_id: "",
                evaluation_year: "",
            },
            {
                role: "",
                institution_id: "",
                evaluation_year: "",
            }
        ];
        const deleteField = jest.fn(() => [{
            role: "",
            institution_id: "",
            evaluation_year: "",
        }])

        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
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
            institution_id: "",
            evaluation_year: "",
        }];
        
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
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
        const handleUpdateEvaluationData = jest.fn(() => true);
        const list_items = [
            {
                role: "",
                institution_id: "",
                evaluation_year: "",
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
                        list_items={list_items}
                        handleUpdateEvaluationData={handleUpdateEvaluationData}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diperbaharui/i)).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {
            name: /simpan/i
        }));

        expect(handleUpdateEvaluationData).toHaveBeenCalledTimes(1);
    });

    it("should show modal after submit", () => {
        const showModal = true;
        const list_items = [
            {
                role: "",
                institution_id: "",
                evaluation_year: "",
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
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
                institution_id: "",
                evaluation_year: "",
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileSPBEComponent
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