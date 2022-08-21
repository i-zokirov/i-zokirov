import React, { useRef } from 'react';
import { Container, Stack, Heading, Text } from '@chakra-ui/react';
import './recentprojects.css';
import SingleProjectCard from './SingleProjectCard';
import recentprojectslist from '../static/RecentProjectsList';

import Pulse from 'react-reveal/Pulse';
import useOnScreen from '../hooks/useOnScreen';
const RecentProjects = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <Container maxW={'7xl'} style={{ marginTop: '0px' }} id="projects">
      <Stack as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading lineHeight={1} fontWeight={600}>
          <Pulse spy={isVisible}>
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
              ref={ref}
            >
              Recent personal noteworthy projects
            </Text>
          </Pulse>
        </Heading>
      </Stack>

      <Stack
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '40px',
          flexWrap: 'wrap',
        }}
      >
        {recentprojectslist.map((project, index) => (
          <SingleProjectCard key={index} project={project} />
        ))}
      </Stack>
    </Container>
  );
};

export default RecentProjects;
