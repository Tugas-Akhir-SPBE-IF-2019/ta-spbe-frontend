import { Table, Pagination, Image } from 'react-bootstrap';
import inspect_img from "../../assets/Analyze.png";
import delete_img from "../../assets/Waste.png";
import { Link } from "react-router-dom";
import { sortByDate } from '../../utils/helper';
import { checkTextColor, checkStatus, formatDate } from '../../utils/helper';

const CustomTable = (props: any) => {
    let sortedContent: any[] = [];
    let navigator = true;
    if (props?.indexResponse?.items) {
        sortedContent = sortByDate(props.indexResponse.items);
    }
    if (props?.assessmentResponse?.items) {
        sortedContent = sortByDate(props.assessmentResponse.items);
    }
    if (props?.indexResponse?.total_pages === 1 || props?.assessmentResponse?.total_pages === 1) {
        navigator = false;
    }
    return (
        <>
            {props.isGuestTable &&
                <Table className="custom-border custom-shadow text-center">
                    <thead>
                        <tr className="fw-bold">
                            <td className="custom-td">No</td>
                            <td className="custom-td">Nama Institusi</td>
                            <td className="custom-td">Tanggal Penilaian</td>
                            <td className="custom-td">Indeks</td>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedContent.length !== 0 && (sortedContent.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td className="custom-td">{index + 1}</td>
                                    <td className="custom-td">{item.institution_name}</td>
                                    <td className="custom-td">{formatDate(item.submitted_date)}</td>
                                    <td className="custom-td">{item.spbe_index}</td>
                                </tr>
                            )  
                        }))}
                    </tbody>
                </Table>
            }
            {props.isUserTable &&
                <Table className="custom-border custom-shadow text-center">
                    <thead>
                        <tr className="fw-bold">
                            <td className="custom-td">No</td>
                            <td className="custom-td">Nama Institusi</td>
                            <td className="custom-td">Status</td>
                            <td className="custom-td">Tanggal Penilaian</td>
                            <td className="custom-td">Aksi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedContent.length !== 0 && (sortedContent.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td className="custom-td">{index + 1}</td>
                                    <td className="custom-td">{item.institution_name}</td>
                                    <td className={checkTextColor(item.status) + " pointer custom-td"} onClick={() => props?.toggleModal()}>
                                        {checkStatus(item.status)}
                                    </td>
                                    <td className="custom-td">{formatDate(item.submitted_date)}</td>
                                    <td className="custom-td">
                                        <Link to={`/result/${item.id}`}><Image src={inspect_img} /></Link>
                                        <Image src={delete_img} />
                                    </td>
                                </tr>
                            )  
                        }))}
                    </tbody>
                </Table>
            }
            <Pagination className="justify-content-end mt-5">
                {navigator &&
                    <Pagination.Prev onClick={() => props?.handlePrev()} />
                }
                {props?.page_component}
                {navigator &&
                    <Pagination.Next onClick={() => props?.handleNext()} />
                }
            </Pagination>
        </>
    )
}

export default CustomTable;