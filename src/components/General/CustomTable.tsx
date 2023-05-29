import { lazy } from 'react';
import { Table, Pagination, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import inspect_img from "../../assets/Analyze.png";
import { Link } from "react-router-dom";
import { sortByDate } from '../../utils/helper';
import { formatDate } from '../../utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const StatusLabel = lazy(() => import("../../components/General/StatusLabel"));

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
                <Table className="custom-border custom-shadow text-center" responsive="md">
                    <thead>
                        <tr className="fw-bold">
                            <td className="custom-td">No</td>
                            <td className="custom-td">Nama Institusi</td>
                            <td className="custom-td">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip>
                                            Tekan pada status untuk melihat riwayat proses penilaian
                                        </Tooltip>
                                    }
                                >
                                    <div className="d-flex align-items-center justify-content-center">
                                        Status
                                        <FontAwesomeIcon icon={faCircleInfo} className="pointer ms-2" />
                                    </div>
                                </OverlayTrigger>
                            </td>
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
                                    <td className="pointer custom-td" onClick={() => props?.getHistory(index)}>
                                        <StatusLabel text={item.status} className="m-auto" />
                                    </td>
                                    <td className="custom-td">{formatDate(item.submitted_date)}</td>
                                    <td className="custom-td">
                                        <Link to={`/result/${item.id}`}><Image src={inspect_img} /></Link>
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