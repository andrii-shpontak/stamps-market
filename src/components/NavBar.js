import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box
      sx={{
        padding: '5px 15px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <Stack>
        <Typography variant="h5" fontWeight={700}>
          Stamps market
        </Typography>
        <Typography color="primary" variant="h6">
          Filatelia
        </Typography>
      </Stack>
      <MenuIcon fontSize="large" color="primary" />
    </Box>
  );
};

export default NavBar;
