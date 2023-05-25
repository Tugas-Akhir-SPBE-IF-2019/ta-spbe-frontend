import { render, screen } from '@testing-library/react';
import UserDashboardComponent from '../components/UserDashboard';
import { Pagination } from 'react-bootstrap';
import { BrowserRouter, Switch } from "react-router-dom";

describe("User Dashboard", () => {
    const assessmentResponse = {
        "total_items": 2,
        "total_pages": 1,
        "items": [
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
    }

    const page_component = [<Pagination.Item>1</Pagination.Item>];

    it("should render supplied assessment list", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <UserDashboardComponent assessmentResponse={assessmentResponse} page_component={page_component} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/solok/i)).toBeInTheDocument();
    });

    it("should render first page by default", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <UserDashboardComponent assessmentResponse={assessmentResponse} page_component={page_component} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByRole("button", {
            name: "1"
        })).toBeInTheDocument();
    });

    it("should render filter options", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <UserDashboardComponent assessmentResponse={assessmentResponse} page_component={page_component} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getAllByRole("combobox")).toHaveLength(1);
        expect(screen.getAllByRole("textbox")).toHaveLength(3);
    });

    it("should show modal on status click", () => {
        const showModal = true;
        render(
            <BrowserRouter>
                <Switch>
                    <UserDashboardComponent assessmentResponse={assessmentResponse} page_component={page_component} showModal={showModal} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/status penilaian/i)).toBeInTheDocument();

    });

    it("redirect to upload page on button click", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <UserDashboardComponent assessmentResponse={assessmentResponse} page_component={page_component} />
                </Switch>
            </BrowserRouter>
        );
        const redirect = screen.getByRole("link", {
            name: /upload/i
        });
        expect(redirect.getAttribute("href")).toBe("/upload");
    });

    it("redirect to result page on image click", () => {
        const assessmentId = "ea7e371c-a258-4c5e-bf99-0d310493c77c";
        render(
            <BrowserRouter>
                <Switch>
                    <UserDashboardComponent assessmentResponse={assessmentResponse} page_component={page_component} />
                </Switch>
            </BrowserRouter>
        );
        const redirect = screen.getAllByRole("link");
        expect(redirect[redirect.length-1].getAttribute("href")).toBe(`/result/${assessmentId}`);
    });
});