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
                    <tr>
                        <td>1</td>
                        <td>Kabupaten Lamongan</td>
                        <td>Selesai</td>
                        <td>21-01-2023</td>
                        <td><Button href="/result/1" variant="secondary" type="submit">Hasil</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kabupaten Phakphak Barat</td>
                        <td>Selesai</td>
                        <td>23-01-2023</td>
                        <td><Button href="/result/1" variant="secondary" type="submit">Hasil</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>RRI</td>
                        <td>Sedang Diproses</td>
                        <td>25-01-2023</td>
                        <td><Button disabled variant="secondary">Hasil</Button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )

}

export default UserDashboardComponent;