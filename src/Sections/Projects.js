import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainCard from './MainCard';

const Projects = () => {
  const data = [
    {
      name: 'hh',
      image: 'appLab',
      description:
        'Experience innovation at its finest on our one-page website, meticulously crafted with modern technologies including CSS, React JS, and HTML. Dive into the world of our app, thoughtfully presented in multiple sections, each highlighting the apps groundbreaking features. Discover how we have seamlessly blended design and technology to showcase the future of app experiences, all on a single, beautifully designed page.',
      github: '',
      Demo: '',
    },
  ];
  return (
    <Container>
      <Box>
        <MainCard data={data} titleProject />
      </Box>
    </Container>
  );
};

export default Projects;
