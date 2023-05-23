import { render, screen } from '@testing-library/react';
import ProfileComponent from '../components/Profile';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Profile", () => {
    it("should render provided biodata", () => {
        const biodataResponse = {
            "name": "Alifah Basyasya",
            "contact_number": "080808080808",
            "email": "alifahbasyasya@gmail.com",
            "linkedin_profile": "https://linkedin.com",
            "address": "myaddress",
            "profile_picture_link": ""
        }
        const jobDataResponse = [];
        const evaluationDataResponse = [];
        const institutionDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        biodataResponse={biodataResponse}
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/alifah basyasya/i)).toBeInTheDocument();
        expect(screen.getByText(/080808080808/i)).toBeInTheDocument();
        expect(screen.getByText(/gmail/i)).toBeInTheDocument();
        expect(screen.getByText(/linkedin.com/i)).toBeInTheDocument();
        expect(screen.getByText(/myaddress/i)).toBeInTheDocument();
    });

    it("should render provided job data", () => {
        const jobDataResponse = [
            {
                "id": "6eae1d30-68ee-4235-8ff3-14d156b533da",
                "role": "Dosen",
                "company": "ITB",
                "joined_year": 2024,
                "created_at": "2023-05-23T22:00:07.10042Z"
            }
        ];
        const evaluationDataResponse = [];
        const institutionDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/dosen/i)).toBeInTheDocument();
        expect(screen.getByText(/itb/i)).toBeInTheDocument();
        expect(screen.getByText(/2024/i)).toBeInTheDocument();
    });

    it("should render provided evaluation data", () => {
        const evaluationDataResponse = [
            {
                "id": "611dea14-1323-40bb-9c77-3597eb460780",
                "role": "Asesor Eksternal",
                "institution_name": "Kabupaten Aceh Barat",
                "institution_id": 1,
                "evaluation_year": 2020,
                "created_at": "2023-05-23T22:00:24.798891Z"
            }
        ];
        const jobDataResponse = [];
        const institutionDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/asesor/i)).toBeInTheDocument();
        expect(screen.getByText(/Aceh/i)).toBeInTheDocument();
        expect(screen.getByText(/2020/i)).toBeInTheDocument();
    });

    it("should render provided institution data", () => {
        const institutionDataResponse = [
            {
                "id": "26d048c0-9770-4638-a32c-d6b8661fe692",
                "institution_name": "Kota Solok",
                "role": "Asesor Eksternal",
                "status": "VALID",
                "created_at": "2023-05-20T04:22:53.844046Z"
            },
            {
                "id": "d305451e-d5ab-4f15-9e9b-5089507a4b10",
                "institution_name": "Kota Padang",
                "role": "Asesor Eksternal",
                "status": "VALID",
                "created_at": "2023-05-20T04:22:53.847714Z"
            }
        ];
        const jobDataResponse = [];
        const evaluationDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/solok/i)).toBeInTheDocument();
        expect(screen.getByText(/asesor/i)).toBeInTheDocument();
        expect(screen.getByText(/diterima/i)).toBeInTheDocument();
    });

    it("should render message if provided with empty data", () => {
        const institutionDataResponse = [];
        const jobDataResponse = [];
        const evaluationDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getAllByText(/belum ada/i)).toHaveLength(3);
    });

    it("redirect to edit profile biodata on button click", () => {
        const institutionDataResponse = [];
        const jobDataResponse = [];
        const evaluationDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );

        const redirect = screen.getByRole("link", {
            name: /data diri/i
        });
        expect(redirect.getAttribute("href")).toBe("/edit-profile/biodata");
    });

    it("redirect to edit profile job on button click", () => {
        const institutionDataResponse = [];
        const jobDataResponse = [];
        const evaluationDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );

        const redirect = screen.getByRole("link", {
            name: /data kerja/i
        });
        expect(redirect.getAttribute("href")).toBe("/edit-profile/occupation");
    });

    it("redirect to edit profile evaluation on button click", () => {
        const institutionDataResponse = [];
        const jobDataResponse = [];
        const evaluationDataResponse = [];

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                    />
                </Switch>
            </BrowserRouter>
        );

        const redirect = screen.getByRole("link", {
            name: /data evaluasi/i
        });
        expect(redirect.getAttribute("href")).toBe("/edit-profile/evaluation");
    });

    it("redirect to edit profile institution on button click", () => {
        const institutionDataResponse = [
            {
                "id": "26d048c0-9770-4638-a32c-d6b8661fe692",
                "institution_name": "Kota Solok",
                "role": "Asesor Eksternal",
                "status": "VALID",
                "created_at": "2023-05-20T04:22:53.844046Z"
            },
            {
                "id": "d305451e-d5ab-4f15-9e9b-5089507a4b10",
                "institution_name": "Kota Padang",
                "role": "Asesor Eksternal",
                "status": "VALID",
                "created_at": "2023-05-20T04:22:53.847714Z"
            }
        ];
        const jobDataResponse = [];
        const evaluationDataResponse = [];
        const showAllInstitution = true;

        render(
            <BrowserRouter>
                <Switch>
                    <ProfileComponent
                        jobDataResponse={jobDataResponse}
                        evaluationDataResponse={evaluationDataResponse}
                        institutionDataResponse={institutionDataResponse}
                        showAllInstitution={showAllInstitution}
                    />
                </Switch>
            </BrowserRouter>
        );

        const redirect = screen.getByRole("link", {
            name: /tambah institusi/i
        });
        expect(redirect.getAttribute("href")).toBe("/edit-profile/institution");
    });
});