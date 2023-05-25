import { render, screen, fireEvent } from '@testing-library/react';
import ValidateResultComponent from '../components/ValidateResult';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Validate Result", () => {
    const listItem = [{
        indicator_number: 1,
        result_correct: false,
        correct_level: 0,
        explanation: "",
    }];

    it("should render supplied indicator list", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={listItem} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getAllByText(/indikator/i).length).toBe(2);
        expect(screen.getByText(/kesesuaian hasil/i)).toBeInTheDocument();
        expect(screen.getByText(/level seharusnya/i)).toBeInTheDocument();
    });

    it("should render all input field", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={listItem} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getAllByRole("radio")).toHaveLength(7);
        expect(screen.getAllByRole("textbox")).toHaveLength(1);
    });

    it("should show error if not all fields are filled", () => {
        const handleInputChange = jest.fn(e => e.target.value);
        
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={listItem} handleInputChange={handleInputChange} />
                </Switch>
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Berikan penjelasan..."), {target: {value: "Ini Penjelasan"}});

        expect(handleInputChange).toBeCalledTimes(1);
    });

    it("should disable other fields if correct level", () => {
        const newListItem = [{
            indicator_number: 1,
            result_correct: true,
            correct_level: 0,
            explanation: "",
        }];
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={newListItem} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByRole("radio", {
            name: "1 2 3 4 5"
        })).toBeDisabled();
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("should submit on button click", () => {
        const handleSendValidation = jest.fn(() => true);
        render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={listItem} handleSendValidation={handleSendValidation} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil divalidasi/i)).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {
            name: /kirim/i
        }));

        expect(handleSendValidation).toHaveBeenCalledTimes(1);
    });

    it("should show modal after submit", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={listItem} showModal={showModal} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil divalidasi/i)).toBeInTheDocument();
    });

    it("redirect to dashboard page on modal close", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <ValidateResultComponent listItem={listItem} showModal={showModal} />
                </Switch>
            </BrowserRouter>
        );
        const redirect = screen.getByRole("link", {
            name: /selesai/i
        });
        expect(redirect.getAttribute("href")).toBe("/dashboard");
    });
});