import { render, screen, fireEvent } from '@testing-library/react';
import UploadDocumentsComponent from '../components/UploadDocuments';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Upload Documents", () => {
    const isChecked = jest.fn((i) => false);
    const supporting_document = [];
    const meeting_minutes = [];
    const old_document = [];
    it("should render all form fields", () => {
        const institutionDataResponse = [
            {
                "id": "07b70bdb-090b-4472-b40b-77a8c528abf9",
                "institution_name": "Kota Padang",
                "status": 2,
                "submitted_date": "2023-05-21T08:52:42.726058Z"
            },
            {
                "id": "ea7e371c-a258-4c5e-bf99-0d310493c77c",
                "institution_name": "Kota Solok",
                "status": 3,
                "submitted_date": "2023-05-20T04:25:08.483461Z"
            }
        ]
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent institutionDataResponse={institutionDataResponse} isChecked={isChecked} supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document} />
                </Switch>
            </BrowserRouter>
        );

        expect(screen.getAllByRole("combobox")).toHaveLength(1);
        expect(container.getElementsByClassName("form-check-input")).toHaveLength(10);
        expect(screen.getAllByText(/dokumen/i)).toHaveLength(5);
        expect(screen.getByText(/notulensi/i)).toBeInTheDocument();
    });

    it("should check all boxes on 'select all' button click", () => {
        const handleInputChange = jest.fn(() => true);

        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent handleInputChange={handleInputChange} isChecked={isChecked} supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document} />
                </Switch>
            </BrowserRouter>
        );
        fireEvent.click(screen.getByRole("button", {
            name: /pilih semua/i
        }));
        expect(handleInputChange).toHaveBeenCalledTimes(1);
    });

    it("should empty all checkboxes on reset button click", () => {
        const handleInputChange = jest.fn(() => false);

        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent handleInputChange={handleInputChange} isChecked={isChecked} supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document} />
                </Switch>
            </BrowserRouter>
        );
        fireEvent.click(screen.getByText(/reset/i));
        expect(handleInputChange).toHaveBeenCalledTimes(1);
    });

    it("should show tooltip info on mouse hover", async () => {
        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent isChecked={isChecked} supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document} />
                </Switch>
            </BrowserRouter>
        );

        expect(screen.queryByText(/terbaru/i)).not.toBeInTheDocument();
        fireEvent.mouseOver(screen.getByText(/pendukung/i));
        
        expect(await screen.getByText(/terbaru/i)).toBeInTheDocument();
    });

    it("should show error if not all fields are filled", () => {
        const handleUploadDocuments = jest.fn(() => false);
        
        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent handleUploadDocuments={handleUploadDocuments} isChecked={isChecked} supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document} />
                </Switch>
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole("button", {
            name: /kirim/i
        }));

        expect(handleUploadDocuments).toBeCalledTimes(1);
        expect(handleUploadDocuments()).toBe(false);

    });

    it("should submit on button click", () => {
        const handleUploadDocuments = jest.fn(() => true);
        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent handleUploadDocuments={handleUploadDocuments} isChecked={isChecked} supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diunggah/i)).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {
            name: /kirim/i
        }));

        expect(handleUploadDocuments).toHaveBeenCalledTimes(1);
        expect(handleUploadDocuments()).toBe(true);

    });

    it("should show modal after submit", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent
                        showModal={showModal}
                        isChecked={isChecked}
                        supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.queryByText(/berhasil diunggah/i)).toBeInTheDocument();
    });

    it("redirect to dashboard page on modal close", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <UploadDocumentsComponent
                        showModal={showModal}
                        isChecked={isChecked}
                        supporting_document={supporting_document} meeting_minutes={meeting_minutes} old_document={old_document}
                    />
                </Switch>
            </BrowserRouter>
        );
        const redirect = screen.getByRole("link", {
            name: /selesai/i
        });
        expect(redirect.getAttribute("href")).toBe("/dashboard");
    });
});