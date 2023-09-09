import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';

const MainCard = ({ data, titleMain, titleProject }) => {
  return (
    <Container>
      {titleMain && (
        <Typography variant='h6' paddingBottom={'10px'} color={'#e4b040'}>
          Previous Projects:
        </Typography>
      )}
      {titleProject && (
        <Typography variant='h6' paddingBottom={'10px'} color={'#e4b040'}>
          Simple looking Projects using React:
        </Typography>
      )}
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              marginY: '20px',
              marginX: '4px',
              maxWidth: { lg: '400px', md: '300px', xs: '300px' },
              height: { lg: '450px', md: '350px', xs: '350px' },
              flex: '50%',
              overflow: 'hidden',
              borderRadius: '6px',
              transition: 'all 1s ease-in-out',
              '&:hover': { boxShadow: '0px 0px  4px  #828282' },
            }}
          >
            <CardMedia
              sx={{
                height: { lg: '250px', md: '200px', xs: '200px' },
                transition: 'all 0.1s ease-in-out',
                overflow: 'hidden',
                '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
              }}
              image={item.image}
              title={item.name}
            />
            <CardContent sx={{ paddingBottom: '0' }}>
              <Typography
                gutterBottom
                component='div'
                color={'#e4b040'}
                fontWeight={'normal'}
                sx={{ fontSize: { md: '16px', xs: '12px' } }}
              >
                {item.name}
              </Typography>
              <Typography
                color='text.secondary'
                sx={{ fontSize: { md: '13px', xs: '10px' } }}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='large'
                href={item.github}
                sx={{
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#e4b040',
                  },
                }}
              >
                Github
              </Button>
              <Button
                size='large'
                href={item.demo}
                sx={{
                  color: 'brown',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#e4b040',
                  },
                }}
              >
                Demo
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default MainCard;
