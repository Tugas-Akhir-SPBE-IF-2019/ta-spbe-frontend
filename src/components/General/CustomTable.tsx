import { Table, Pagination, Image } from 'react-bootstrap';
import inspect_img from "../../assets/Analyze.png";
import delete_img from "../../assets/Waste.png";

const CustomTable = (props: any) => {
    return (
        <>
            {props.isGuestTable &&
                <Table className="custom-border custom-shadow text-center">
                    <thead>
                        <tr className="fw-bold">
                            <td>No</td>
                            <td>Nama Institusi</td>
                            <td>Tanggal Penilaian</td>
                            <td>Indeks</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.indexResponse?.length !== 0 && (props.indexResponse.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.institution_name}</td>
                                    <td>{item.submitted_date}</td>
                                    <td>{item.spbe_index}</td>
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
                            <td>No</td>
                            <td>Nama Institusi</td>
                            <td>Status</td>
                            <td>Tanggal Penilaian</td>
                            <td>Aksi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.assessmentResponse?.length !== 0 && (props.assessmentResponse.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.institution_name}</td>
                                    <td className={props.checkTextColor(item.status)}>
                                        {(item.status === 1 && "Sedang Diproses") ||
                                        (item.status === 2 && "Selesai") ||
                                        (item.status === 3 && "Sudah Divalidasi")}
                                    </td>
                                    <td>{item.submitted_date}</td>
                                    <td>
                                        <Image src={inspect_img} />
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