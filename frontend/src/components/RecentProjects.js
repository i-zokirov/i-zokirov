import React, { useRef } from 'react';
import { Container, Stack, Heading, Text } from '@chakra-ui/react';
import './recentprojects.css';
import SingleProjectCard from './SingleProjectCard';
import recentprojectslist from '../static/RecentProjectsList';

import { AttentionSeeker } from 'react-awesome-reveal';

const RecentProjects = () => {
  const ref = useRef();

  return (
    <Container maxW={'7xl'} style={{ marginTop: '0px' }} id="projects">
      <Stack as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading lineHeight={1} fontWeight={600}>
          <AttentionSeeker effect="pulse">
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
              ref={ref}
            >
              Recent personal noteworthy projects
            </Text>
          </AttentionSeeker>
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
