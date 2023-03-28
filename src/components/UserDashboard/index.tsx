import { lazy } from 'react';
import { Table, Button } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));

const UserDashboardComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Nama Institusi</td>
                        <td>Status</td>
                        <td>Tanggal Penilaian</td>
                        <td>Lihat Detail</td>
                    </tr>
                </thead>
                <tbody>
                    {props?.assessmentResponse?.length !== 0 && (props.assessmentResponse.map((item: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.institution_name}</td>
                                <td>
                                    {(item.status === 1 && "Sedang Diproses") ||
                                    (item.status === 2 && "Selesai") ||
                                    (item.status === 3 && "Sudah Divalidasi")}
                                </td>
                                <td>{item.submitted_date}</td>
                                <td><Button className={"fw-bold " + (item.status === 1 && "disabled")} href={`/result/${item.id}`} variant="secondary" type="submit">Hasil</Button></td>
                            </tr>
                        )  
                    }))}
                </tbody>
            </Table>
        </>
    )

}

export default UserDashboardComponent;