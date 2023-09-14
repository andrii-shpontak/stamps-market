import { Stack } from '@mui/material';
import React from 'react';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <Stack
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
        <Facebook />
        <Instagram />
        <Twitter />
      </Stack>
      <h4 style={{ marginTop: '0' }}>Post stamps</h4>
    </footer>
  );
};

export default Footer;
