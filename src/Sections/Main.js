import React from 'react';
import Hotel from '../images/hotel.jpg';
import Edge from '../images/Edge.jpg';
import Jd from '../images/JD.jpg';
import appLab from '../images/app_labb.jpg';
import profilePhoto from '../images/Profile_pic.jpg';
import active from '../images/active_box.jpg';
import HM from '../images/HM.jpg';
import MainCard from './MainCard';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Projects from './Projects';

const Main = () => {
  const data = [
    {
      name: 'App Lab',
      image: appLab,
      description:
        'Experience innovation on our one-page website, crafted with modern technologies including CSS, React JS, and HTML, thoughtfully presented in multiple sections, all on a single, beautifully designed page.',
      github: '',
      Demo: '',
    },

    {
      name: 'John Doe!',
      image: Jd,
      description:
        'John Doe. Crafted with cutting-edge technologies like SASS, CSS, React JS, and HTML, our site takes you on a visual journey. Featuring his award-winning captures, thoughtfully organized across multiple pages.',
      github: 'https://github.com/WasnaaRaafat/JohnDoe',
      demo: 'https://wasnaaraafat.github.io/JohnDoe/',
    },
    {
      name: 'HM',
      image: HM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut temporibus obcaecati consectetur itaque, libero esse sunt ducimus, facilis rem vero ipsum reiciendis harum aspernatur at amet nulla.',
      github: '',
      demo: '',
    },
    {
      name: 'Active Box',
      image: active,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut temporibus obcaecati consectetur itaque, libero esse sunt ducimus, facilis rem vero ipsum reiciendis harum aspernatur at amet nulla.',
      github: 'https://github.com/WasnaaRaafat/active/tree/main',
      demo: 'https://wasnaaraafat.github.io/active/',
    },

    {
      name: 'Hotel Website',
      image: Hotel,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut temporibus obcaecati consectetur itaque, libero esse sunt ducimus, facilis rem vero ipsum reiciendis harum aspernatur at amet nulla.',
      github: 'https://github.com/WasnaaRaafat/Hotel',
      demo: 'https://wasnaaraafat.github.io/Hotel/',
    },
    {
      name: 'EdgeDeger',
      image: Edge,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut temporibus obcaecati consectetur itaque, libero esse sunt ducimus, facilis rem vero ipsum reiciendis harum aspernatur at amet nulla.',
      github: 'https://github.com/WasnaaRaafat/EdgeDeger',
      demo: 'https://wasnaaraafat.github.io/EdgeDeger/',
    },
  ];
  return (
    <div>
      <Container
        sx={{
          height: '83vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Divider />

        <Avatar
          sx={{ width: '120px', height: '120px', marginBottom: '15px' }}
          src={profilePhoto}
          alt='profile_photo'
        ></Avatar>
        <Typography variant='body1' fontWeight={'light'} marginBottom={'15px'}>
          {' '}
          Hello, I'm Wasnaa
        </Typography>
        <Typography
          variant='h5'
          textAlign={'center'}
          lineHeight={'35px'}
          fontWeight={'normal'}
        >
          A Frontend Developer, always <br /> looking to try new adventures.
        </Typography>
      </Container>

      <MainCard data={data} titleMain />

      <Projects />
    </div>
  );
};

export default Main;
