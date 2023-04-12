import { Table, Pagination, Image } from 'react-bootstrap';
import inspect_img from "../../assets/Analyze.png";
import delete_img from "../../assets/Waste.png";
import { Link } from "react-router-dom";

const CustomTable = (props: any) => {
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
                        {props?.indexResponse?.length !== 0 && (props.indexResponse.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td className="custom-td">{index + 1}</td>
                                    <td className="custom-td">{item.institution_name}</td>
                                    <td className="custom-td">{item.submitted_date}</td>
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
                        {props?.assessmentResponse?.length !== 0 && (props.assessmentResponse.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td className="custom-td">{index + 1}</td>
                                    <td className="custom-td">{item.institution_name}</td>
                                    <td className={props.checkTextColor(item.status) + " pointer custom-td"} onClick={() => props?.toggleModal()}>
                                        {(item.status === 1 && "Sedang Diproses") ||
                                        (item.status === 2 && "Selesai") ||
                                        (item.status === 3 && "Sudah Divalidasi")}
                                    </td>
                                    <td className="custom-td">{item.submitted_date}</td>
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
            {/* Dummy Pagination */}
            <Pagination className="justify-content-end mt-5">
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    )
}

export default CustomTable;