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
                    <tr>
                        <td>1</td>
                        <td>Kabupaten Lamongan</td>
                        <td>4.7</td>
                        <td>25-01-2023</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kabupaten Phakphak Barat</td>
                        <td>3.4</td>
                        <td>25-01-2023</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>RRI</td>
                        <td>2.1</td>
                        <td>25-01-2023</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )

}

export default GuestDashboardComponent;