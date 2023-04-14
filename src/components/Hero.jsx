import { Box } from '@mui/material'
import React from 'react'
import { keyframes } from '@emotion/react';
import image from '../assets/download.jpg'

const animateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Hero = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: "linear-gradient(-45deg, #f9d423, #ff4e50, #1b1b1b) ",
        backgroundImage: `linear-gradient(-45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundSize: "400% 400%",
        animation: `${animateGradient} 5s ease infinite`
      }}
    >
      <h1 style={{color: "white", fontSize: "3rem", fontFamily : "unset" , textAlign: "center"}}>
        Manage your Employee data
      </h1>
    </Box>
  )
}

export default Hero;