import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


const Header = () => {
  return (
    <Box   sx={{
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        }
      }}>
      <AppBar position="static" >
        <Toolbar variant="dense">
       
          <Typography sx={{ mr: 'auto' }} variant="h6" color="inherit" component="div">
            Rick and Morty 
          </Typography>
          <Link sx={{ ml: 'auto' }} variant="h6" color="inherit" component="a" href="#">Репозиторий</Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
