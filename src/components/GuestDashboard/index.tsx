import { lazy } from 'react';
import { Table } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));

const GuestDashboardComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Nama Institusi</td>
                        <td>Indeks</td>
                        <td>Tanggal Penilaian</td>
                    </tr>
                </thead>
                <tbody>
                    {props?.indexResponse?.length !== 0 && (props.indexResponse.map((item: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.institution_name}</td>
                                <td>{item.spbe_index}</td>
                                <td>{item.submitted_date}</td>
                            </tr>
                        )  
                    }))}
                </tbody>
            </Table>
        </>
    )
}

export default GuestDashboardComponent;