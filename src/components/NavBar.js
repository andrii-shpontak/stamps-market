import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: '5px 15px' }}>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
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
      </Stack>

      <Stack>
        <Button
          sx={{ width: '280px' }}
          variant="contained"
          endIcon={<ArrowDropDownIcon fontSize="large" />}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          Categories
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}>
          <MenuItem sx={{ width: '280px' }} onClick={handleClose}>
            Option 1
          </MenuItem>
          <MenuItem sx={{ width: '280px' }} onClick={handleClose}>
            Option 2
          </MenuItem>
          <MenuItem sx={{ width: '280px' }} onClick={handleClose}>
            Option 3
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  );
};

export default NavBar;
