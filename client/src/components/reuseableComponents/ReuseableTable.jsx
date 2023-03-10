import * as React from 'react';
import './reuseableTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditDelete from '../editDelete/EditDelete';
import { ToastContainer } from 'react-toastify';

// 
export default function ReuseableTable(props) {
    return (
        <>
            <ToastContainer />
            <div className="table-box">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead style={{ backgroundColor: 'black' }}>
                            <TableRow>
                                <TableCell style={{ color: 'white', fontWeight: '600' }}>ID</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: '600' }}>Image</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: '600' }}>Menu Items</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: '600' }} align="left">Category</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: '600' }} align="center">Price</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: '600' }} align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.rows?.map((row, id) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {id + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className="table-image">
                                            <img src={row.image} alt="menu img" />
                                        </div>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.menuName}
                                    </TableCell>
                                    <TableCell align="left">{row.category}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center">
                                        <EditDelete item={row} endpoint="menu" fetchList={props.fetchList} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}