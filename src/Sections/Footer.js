import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
const Footer = () => {
  const navItems = [
    { name: 'Linkedin / ', link: 'https://www.linkedin.com/in/wasnaa/' },
    { name: 'GitHub', link: 'https://github.com/WasnaaRaafat' },
  ];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Divider />
      <Toolbar
        sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}
      >
        <Box>
          {' '}
          <Button
            variant='text'
            size='large'
            target='_top'
            rel='noopener noreferrer'
            href={`mailto:wasnaaraafat@gmail.com`}
            sx={{
              color: '#000',
              fontSize: '0.875rem',
              fontWeight: 'light',
              '&:hover': { backgroundColor: 'transparent', color: '#828282' },
            }}
          >
            <MarkunreadOutlinedIcon
              fontSize='large'
              sx={{ marginRight: '4px' }}
            />
            Get in touch.
          </Button>
        </Box>

        <Box
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
        >
          <Typography fontSize={'small'} textAlign={'center'}>
            {' '}
            &copy; All rights reserved.
          </Typography>
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
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Footer;
