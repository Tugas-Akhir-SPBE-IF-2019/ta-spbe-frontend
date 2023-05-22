import { render, screen, fireEvent } from '@testing-library/react';
import EditProfileWorkComponent from '../components/EditProfileWork';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Edit Profile Work", () => {
    it("should render supplied evaluation data", () => {
        const list_items = [{
            role: "Asesor Eksternal",
            company: "ITB",
            joined_year: "2020",
        }];

        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
                        list_items={list_items}
                    />
                </Switch>
            </BrowserRouter>
        );

        const role = screen.getByPlaceholderText("Tuliskan Pekerjaan/Jabatan") as HTMLInputElement;
        const company = screen.getByPlaceholderText("Tuliskan Instansi") as HTMLInputElement;
        const year = screen.getByPlaceholderText("Tuliskan Tahun Masuk") as HTMLInputElement;

        expect(role.value).toBe("Asesor Eksternal");
        expect(company.value).toBe("ITB");
        expect(year.value).toBe("2020");
    });

    it("should add field on plus button click", () => {
        const list_items = [
            {
                role: "",
                company: "",
                joined_year: "",
            }
        ];
        const addField = jest.fn(() => [...list_items, {
            role: "",
            company: "",
            joined_year: "",
        }])

        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
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
                company: "",
                joined_year: "",
            },
            {
                role: "",
                company: "",
                joined_year: "",
            }
        ];
        const deleteField = jest.fn(() => [{
            role: "",
            company: "",
            joined_year: "",
        }])

        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
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
            company: "",
            joined_year: "",
        }];
        
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
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
        const handleUpdateJobData = jest.fn(() => true);
        const list_items = [
            {
                role: "",
                company: "",
                joined_year: "",
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
                        list_items={list_items}
                        handleUpdateJobData={handleUpdateJobData}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diperbaharui/i)).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {
            name: /simpan/i
        }));

        expect(handleUpdateJobData).toHaveBeenCalledTimes(1);
    });

    it("should show modal after submit", () => {
        const showModal = true;
        const list_items = [
            {
                role: "",
                company: "",
                joined_year: "",
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
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
                company: "",
                joined_year: "",
            }
        ];
        render(
            <BrowserRouter>
                <Switch>
                    <EditProfileWorkComponent
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