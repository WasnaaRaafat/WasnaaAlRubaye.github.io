import * as React from 'react';
import icon from '../images/WR_Frame.png';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const navItems = [
  { name: 'Linkedin / ', link: 'https://www.linkedin.com/in/wasnaa/' },

  { name: 'GitHub', link: 'https://github.com/WasnaaRaafat' },
];

function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='static'
        component='nav'
        sx={{ boxShadow: 'none', background: '#fff8ea' }}
      >
        <Toolbar sx={{ paddingTop: '10px' }}>
          <Box
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <img
              alt='icon'
              src={icon}
              width={'60px'}
              height={'60px'}
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            />
          </Box>

          <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                href={item.link}
                sx={{
                  color: '#000',
                  fontWeight: 'light',
                  borderRadius: '0',
                  '&:hover': {
                    color: '#828282',
                    backgroundColor: 'transparent',
                    borderBottom: 'solid 1px black',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
