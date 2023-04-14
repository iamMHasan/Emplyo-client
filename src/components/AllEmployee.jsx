import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import {Link} from "react-router-dom"

const AllEmployee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("https://server2-phi.vercel.app/api/user")
      .then(res => res.json())
      .then(data => setEmployee(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://server2-phi.vercel.app/api/user/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
        setEmployee(employee.filter(emp => emp._id !== id));
        toast.success("Deleted successfully");
    })
    .catch(error => {
      console.error(error);
      toast.error("Failed to delete user");
    });
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((emp, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{emp.firstName}</TableCell>
              <TableCell align="right">{emp.lastName}</TableCell>
              <TableCell align="right">{emp.email}</TableCell>
              <TableCell align="right">{emp.salary}</TableCell>
              <TableCell align="right">{emp.date}</TableCell>
              <TableCell align="right">
              <Link to ={`/edit/${emp._id}`}> <Button sx={{ mr: 1 }} variant="outlined">Edit</Button></Link>
                <Button onClick={()=> handleDelete(emp._id)} variant="outlined">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllEmployee;
