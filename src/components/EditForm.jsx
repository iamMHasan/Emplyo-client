import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const EditForm = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    salary: '',
    date: '',
    email: '',
  });

  const {
    firstName,
    lastName,
    salary,
    date,
    email,
  } = employeeData;

  useEffect(() => {
    fetch(`https://server2-phi.vercel.app/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployeeData(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleFirstName = (event) => {
    setEmployeeData({ ...employeeData, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setEmployeeData({ ...employeeData, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setEmployeeData({ ...employeeData, email: event.target.value });
  };

  const handleSalary = (event) => {
    setEmployeeData({ ...employeeData, salary: event.target.value });
  };

  const handleDate = (event) => {
    setEmployeeData({ ...employeeData, date: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    fetch(`https://server2-phi.vercel.app/api/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        navigate("/allEmployee")
        toast.success('Updated successfully');
      })
      .catch(() => {
        toast.error('Failed to update user');
      });

    setEmployeeData({
      firstName: '',
      lastName: '',
      salary: '',
      date: '',
      email: '',
    });
  };
    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center', mt: 4 }}>
                Update a Employee Details
            </Typography>
            <hr style={{ width: '50px', height: '3px', margin: 'auto', marginTop: '16px', marginBottom: '32px', backgroundColor: '#f50057', border: 'none' }} />
            <Container maxWidth="xs">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                fullWidth
                                label="First Name"
                                value={firstName}
                                onChange={handleFirstName}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                fullWidth
                                label="Last Name"
                                value={lastName}
                                onChange={handleLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                fullWidth
                                label="Salary"
                                value={salary}
                                onChange={handleSalary}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="date"
                                fullWidth
                                value={date}
                                onChange={handleDate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth type="submit" variant="contained">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}

export default EditForm
