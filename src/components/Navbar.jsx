import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"

const Navbar = () => {
    const handleBookNowClick = () => {
        const element = document.getElementById('formId');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleHomeClick = () => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box id="home" sx={{ flexGrow: 1 }}>
            <AppBar sx={{
                bgcolor: "transparent",
                color : "black",
                boxShadow : "none",
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Emplyo
                    </Typography>
                    <Link to="/">  <Button onClick={handleBookNowClick} color="inherit">Home</Button></Link>
                    <Link to="/allEmployee">  <Button onClick={handleBookNowClick} color="inherit">AllEmployee</Button></Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default Navbar;
