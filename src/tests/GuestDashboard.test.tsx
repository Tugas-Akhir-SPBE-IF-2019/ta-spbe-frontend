import { render, screen } from '@testing-library/react';
import GuestDashboardComponent from '../components/GuestDashboard';
import { Pagination } from 'react-bootstrap';

describe("Guest Dashboard", () => {
    const indexResponse = {
        "total_items": 11,
        "total_pages": 2,
        "items": [
            {
                "institution_name": "Institut Teknologi Sepuluh Nopember",
                "spbe_index": 1.6,
                "submitted_date": "2023-05-21T11:09:09.676966Z"
            },
            {
                "institution_name": "Rumah",
                "spbe_index": 2,
                "submitted_date": "2023-05-21T10:49:27.235294Z"
            },
            {
                "institution_name": "Kota Bandung",
                "spbe_index": 2,
                "submitted_date": "2023-05-21T10:22:50.018474Z"
            },
            {
                "institution_name": "Kota Padang",
                "spbe_index": 2,
                "submitted_date": "2023-05-21T08:52:42.726058Z"
            },
            {
                "institution_name": "Bandung",
                "spbe_index": 1.8,
                "submitted_date": "2023-05-20T07:21:52.345402Z"
            },
            {
                "institution_name": "Kabupaten Lamongan",
                "spbe_index": 2.125,
                "submitted_date": "2023-05-20T06:54:36.755842Z"
            },
            {
                "institution_name": "Kota Makassar",
                "spbe_index": 1.8,
                "submitted_date": "2023-05-20T04:26:49.688307Z"
            },
            {
                "institution_name": "Kota Solok",
                "spbe_index": 2,
                "submitted_date": "2023-05-20T04:25:08.483461Z"
            },
            {
                "institution_name": "Kota Bandung",
                "spbe_index": 2,
                "submitted_date": "2023-05-20T04:18:14.565525Z"
            },
            {
                "institution_name": "Kota Bandung",
                "spbe_index": 2,
                "submitted_date": "2019-01-23T12:54:18.61Z"
            }
        ]
    };

    const page_component = [<Pagination.Item>1</Pagination.Item>];

    it("should render supplied index list", () => {
        render(<GuestDashboardComponent indexResponse={indexResponse} page_component={page_component} />);
        expect(screen.getByText("Indeks")).toBeInTheDocument();
    });

    it("should render first page by default", () => {
        render(<GuestDashboardComponent indexResponse={indexResponse} page_component={page_component} />);
        expect(screen.getByRole("button", {
            name: "1"
        })).toBeInTheDocument();
    });

    it("should render filter options", () => {
        render(<GuestDashboardComponent indexResponse={indexResponse} page_component={page_component} />);
        expect(screen.getAllByRole("slider")).toHaveLength(2);
        expect(screen.getAllByRole("textbox")).toHaveLength(3);
    });
});