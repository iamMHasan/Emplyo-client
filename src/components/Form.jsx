import React, { useState } from 'react'
import { Typography, Grid, TextField, Container, Button } from "@mui/material"
import { toast } from 'react-toastify';
const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState(false)
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState(false)
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const [salary, setSalary] = useState("")
    const [salaryError, setSalaryError] = useState(false)
    const handleSalary = (event) => {
        setSalary(event.target.value)
    }

    const [date, setDate] = useState("")
    const [dateError, setDateError] = useState(false)
    const handleDate = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!firstName) {
            setFirstNameError(true)
        } else {
            setFirstNameError(false)
        }
        if (!lastName) {
            setLastNameError(true)
        } else {
            setLastNameError(false)
        }
        if (!email) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (!date) {
            setDateError(true)
        } else {
            setDateError(false)
        }
        if (!salary) {
            setSalaryError(true)
        } else {
            setSalaryError(false)
        }
        const data = {
            firstName,
            lastName,
            email,
            salary,
            date
        }

        fetch("https://server2-phi.vercel.app/api/user",{
            method : "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body : JSON.stringify(data)
        })
        .then(res => res.json())
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
          });
          toast.success("Employee created successfull")
          setFirstName("")
          setLastName("")
          setEmail("")
          setDate("")
          setSalary("")
    }
    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center', mt: 4 }}>
               Create a Employee Details
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
                                error={firstNameError}
                                helperText={
                                    firstNameError ? 'Please enter a First Name' : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                fullWidth
                                label="Last Name"
                                value={lastName}
                                onChange={handleLastName}
                                error={lastNameError}
                                helperText={
                                    lastNameError ? 'Please enter a Last Name' : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={handleEmail}
                                error={emailError}
                                helperText={
                                    emailError ? 'Please enter a valid email' : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                fullWidth
                                label="Salary"
                                value={salary}
                                onChange={handleSalary}
                                error={salaryError}
                                helperText={
                                    salaryError ? 'Please enter a valid salary' : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="date"
                                fullWidth
                                value={date}
                                onChange={handleDate}
                                error={dateError}
                                helperText={
                                    dateError ? 'Please enter a valid date' : ''
                                }
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

export default Form
