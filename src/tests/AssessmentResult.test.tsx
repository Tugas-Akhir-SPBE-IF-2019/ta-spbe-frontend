import { render, screen, fireEvent } from '@testing-library/react';
import AssessmentResultComponent from '../components/AssessmentResult';
import { BrowserRouter, Switch } from "react-router-dom";

describe("Assessment Result", () => {
    const assessmentResultResponse = {
        institution_name: "Kota Padang",
        submitted_date: "2023-05-21T08:52:42.726058Z",
        assessment_status: 2,
        result: [
            {
                "domain": "Kebijakan Internal SPBE",
                "aspect": "Kebijakan Internal Tata Kelola SPBE",
                "indicator_number": 1,
                "level": 2,
                "explanation": "Verifikasi dan validasi telah dilakukan terhadap penjelasan dan data dukung pada Indikator 1 Tingkat Kematangan Kebijakan Internal Arsitektur SPBE Instansi Pusat/Pemerintah Daerah pada Kota Padang, dimana tercantum dalam PERATURAN BUPATI BATU BARA NOMOR : 81 TAHUN 2021 TENTANG SISTEM PEMERINTAHAN BERBASIS ELEKTRONIK DALAM PENYELENGGARAAN PEMERINTAHAN DAERAH DI KABUPATEN BATU BARA, yaitu pada halaman 13 dan 14 sesuai data dukung  F2201-287-Indikator_01~+~Indikator1_Perbup_81_tahun_2021.pdf",
                "support_document_proof": [
                    {
                        "name": "F2201-287-Indikator_01~+~Indikator1_Perbup_81_tahun_2021.pdf",
                        "document_url": "http://ec2-13-250-41-37.ap-southeast-1.compute.amazonaws.com/static/891c97cae1ae4cc58b1f91ce30d33dbe.pdf",
                        "type": "NEW_DOCUMENT",
                        "proof": "domain Arsitektur Proses Bisnis, b. domain Arsitektur data dan informasi, c. domain Arsitektur Infrastruktur SPBE, d. domain Arsitektur Aplikasi SPBE, e. domain Arsitektur Keamanan SPBE, f. domain Arsitektur Layanan SPBE, (7)  Untuk  menyelaraskan  Arsitektur  SPBE  Pemerintah Daerah  dengan  Arsitektur  SPBE  Nasional,  Bupati berkoordinasi  dan  dapat  melakukan  konsultasi  dengan menteri yang menyelenggarakan urusan pemerintahan di bidang aparatur Negara",
                        "proof_image_url": "http://ec2-13-250-41-37.ap-southeast-1.compute.amazonaws.com/static/891c97cae1ae4cc58b1f91ce30d33dbe.pdf-page-13.png",
                        "proof_page_document_url": "http://ec2-13-250-41-37.ap-southeast-1.compute.amazonaws.com/static/891c97cae1ae4cc58b1f91ce30d33dbe.pdf#page=13"
                    },
                    {
                        "name": "F2201-287-Indikator_01~+~Indikator1_Perbup_81_tahun_2021.pdf",
                        "document_url": "http://ec2-13-250-41-37.ap-southeast-1.compute.amazonaws.com/static/891c97cae1ae4cc58b1f91ce30d33dbe.pdf",
                        "type": "NEW_DOCUMENT",
                        "proof": "domain Arsitektur Proses Bisnis, b. domain Arsitektur data dan informasi, c. domain Arsitektur Infrastruktur SPBE, d. domain Arsitektur Aplikasi SPBE, e. domain Arsitektur Keamanan SPBE, f. domain Arsitektur Layanan SPBE, (7)  Untuk  menyelaraskan  Arsitektur  SPBE  Pemerintah Daerah  dengan  Arsitektur  SPBE  Nasional,  Bupati berkoordinasi  dan  dapat  melakukan  konsultasi  dengan menteri yang menyelenggarakan urusan pemerintahan di bidang aparatur Negara",
                        "proof_image_url": "http://ec2-13-250-41-37.ap-southeast-1.compute.amazonaws.com/static/891c97cae1ae4cc58b1f91ce30d33dbe.pdf-page-14.png",
                        "proof_page_document_url": "http://ec2-13-250-41-37.ap-southeast-1.compute.amazonaws.com/static/891c97cae1ae4cc58b1f91ce30d33dbe.pdf#page=14"
                    }
                ]
            }
        ]
    }
    const support_doc_name = {
        0: ["Document.pdf"],
    };

    it("should render supplied assessment result", () => {
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <AssessmentResultComponent assessmentResultResponse={assessmentResultResponse} support_doc_name={support_doc_name} />
                </Switch>
            </BrowserRouter>
        );
        expect(container.querySelector("[id='1']")).toBeInTheDocument();
    });

    it("should render supplied assessment status", () => {
        render(
            <BrowserRouter>
                <Switch>
                    <AssessmentResultComponent assessmentResultResponse={assessmentResultResponse} support_doc_name={support_doc_name} />
                </Switch>
            </BrowserRouter>
        );
        expect(screen.getByText(/selesai/i)).toBeInTheDocument();
    });

    it("should display shortcut link based on supplied assessment result", () => {
        const link_list = [1];
        render(
            <BrowserRouter>
                <Switch>
                    <AssessmentResultComponent link_list={link_list} assessmentResultResponse={assessmentResultResponse} support_doc_name={support_doc_name} />
                </Switch>
            </BrowserRouter>
        );
        const activeLink = screen.getByRole("link", {
            name: "1"
        });
        expect(activeLink).toBeEnabled();
    });
    
    it("can copy text to clipboard", () => {
        const copyText = jest.fn();
        const { container } = render(
            <BrowserRouter>
                <Switch>
                    <AssessmentResultComponent copyText={copyText} assessmentResultResponse={assessmentResultResponse} support_doc_name={support_doc_name} />
                </Switch>
            </BrowserRouter>
        );
        fireEvent.click(container.getElementsByClassName('pointer text-purple')[0]);
        expect(copyText).toHaveBeenCalledTimes(1);
    });

    it("can download anotated PDF file", () => {
        const handleDownloadFile = jest.fn();
        render(
            <BrowserRouter>
                <Switch>
                    <AssessmentResultComponent handleDownloadFile={handleDownloadFile} assessmentResultResponse={assessmentResultResponse} support_doc_name={support_doc_name} />
                </Switch>
            </BrowserRouter>
        );
        fireEvent.click(screen.getByRole("button", {
            name: /unduh hasil penilaian/i
        }));
        expect(handleDownloadFile).toHaveBeenCalledTimes(1);
    });
});