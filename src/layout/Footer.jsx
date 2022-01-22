import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const Footer = () => {
   return (
    <footer variant="dense">

      <Box  sx={{backgroundColor: "#1976d2", display:  "flex", color: '#fff'}}>
            <Link sx={{ mx: 'auto' }} variant="h6" color="inherit" component="a" target="_blank" href="https://github.com/poring931/react_rickAndMorty">Репозиторий</Link>
      </Box>
    </footer>
  );
};

export default Footer;
