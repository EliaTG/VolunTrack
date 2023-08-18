import React from 'react'
import './table.scss';
// Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComp = () => {
    const rows = [
        {
          id: 11,
          img: "https://imgs.search.brave.com/6INsQcdbRU7Y_pz1wkNkcX5k9wR3lAirYXW_yJ7sEro/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2Mw/LzdjLzM4YzA3Y2Mz/MDMyNDBlNTRmMDVk/YTYwNzJjZWVkYWY4/LS1qb24tc2NobmVl/LWtpdC1oYXJyaW5n/dG9uLmpwZw",
          name: "Jon Snow",
          email: "jonElbastardo@gmail.com",
          age: 32,
          country: "Dominican Republic",
          status: "Active",
        },
        {
          id: 12,
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          name: "Emma Lopez",
          email: "emmazz@gmail.com",
          age: 22,
          country: "Dominican Republic",
          status: "Active",
        },
        {
          id: 13,
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          name: "Brayan Gonzalez",
          email: "elbrayan@gmail.com",
          age: 23,
          country: "Dominican Republic",
          status: "Banned",
        },
        {
          id: 14,
          img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          name: "Pedro Ortega",
          email: "Portega@gmail.com",
          age: 24,
          country: "Dominican Republic",
          status: "Active",
        },
   
      
      ];
  return (
        <section className='tableSection'>
                <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Email</TableCell>
                    <TableCell className="tableCell">Age</TableCell>
                    <TableCell className="tableCell">Country</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell className="tableCell">{row.id}</TableCell>
                        <TableCell className="tableCell">
                        <div className="cellWrapper">
                            <img src={row.img} alt="" className="image" />
                            {row.name}
                        </div>
                        </TableCell>
                        <TableCell className="tableCell">{row.email}</TableCell>
                        <TableCell className="tableCell">{row.age}</TableCell>
                        <TableCell className="tableCell">{row.country}</TableCell>
                        <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
     </section>
  )
}

export default TableComp

