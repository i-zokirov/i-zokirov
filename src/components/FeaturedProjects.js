import React, { useState, useEffect } from 'react';
import { Container, Stack, Heading, Text } from '@chakra-ui/react';

import './features.css';
import FeaturedProject from './FeaturedProject';

const projects = [
  {
    projectName: 'Pia Muszer',
    projectId: '123',
    description:
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    techs: ['React & Redux', 'MongoDB', 'Node.js & Express'],
    url: '/',
    repo: '/',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    projectName: 'Todoist',
    projectId: '124',
    description:
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    techs: ['React & Redux', 'MongoDB', 'Node.js & Express'],
    url: '/',
    repo: '/',
    imageUrl:
      'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const FeaturedProjects = () => {
  const [displayPosition, setDisplayPosition] = useState('left');
  return (
    <Container maxW={'7xl'} style={{ marginTop: '20px' }}>
      <Stack
        align={'center'}
        justify={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 20 }}
        direction={{ base: 'column' }}
      >
        <Heading lineHeight={1.1} fontWeight={600}>
          <Text
            as={'span'}
            style={{ fontFamily: 'monospace' }}
            color={'green.400'}
          >
            Some things I have built
          </Text>
        </Heading>

        {projects.map((project, index) => {
          return index % 2 === 0 ? (
            <FeaturedProject
              key={index}
              title={project.projectName}
              imageUrl={project.imageUrl}
              demoLink={project.url}
              githubLink={project.repo}
              stacks={project.techs}
              description={project.description}
              position={'left'}
            />
          ) : (
            <FeaturedProject
              key={index}
              title={project.projectName}
              imageUrl={project.imageUrl}
              demoLink={project.url}
              githubLink={project.repo}
              stacks={project.techs}
              description={project.description}
              position={'right'}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default FeaturedProjects;
