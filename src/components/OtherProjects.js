import React from 'react';
import { Container, Stack, Heading, Text, IconButton } from '@chakra-ui/react';
import Feature from './Feature';
import FAIcons from './FAIcons';
import './otherprojects.css';

const OtherProjects = () => {
  return (
    <Container maxW={'7xl'} style={{ marginTop: '20px' }}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading lineHeight={1.1} fontWeight={600}>
          <Text
            as={'span'}
            style={{ fontFamily: 'monospace' }}
            color={'green.400'}
          >
            Other noteworthy projects
          </Text>
        </Heading>
      </Stack>

      <Stack
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          padding: '40px',
          flexWrap: 'wrap',
        }}
      >
        <Feature
          justifyContent="center"
          align="left"
          p={4}
          radius={'10px'}
          width={300}
          height={'auto'}
          style={{ margin: '5px' }}
          className="project-card"
        >
          <div className="project-card-header">
            <IconButton
              icon={<FAIcons className="fa-solid fa-folder-open" />}
            />

            <span className="project-card-header-right">
              <IconButton
                style={{ marginRight: '5px' }}
                icon={<FAIcons className="fa-brands fa-github" />}
              />
              <IconButton
                icon={
                  <FAIcons className="fa-solid fa-arrow-up-right-from-square" />
                }
              />
            </span>
          </div>
          <br />
          <div className="project-card-body">
            <Heading as="h5" size="sm">
              <Text
                as={'span'}
                style={{ fontFamily: 'monospace' }}
                color={'green.400'}
              >
                Google sheet API Integration
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </Text>
          </div>
          <br />
          <div className="project-card-footer">
            <Text color={'gray.500'} fontSize={'sm'}>
              React
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              React
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              React
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              React
            </Text>
          </div>
        </Feature>
      </Stack>
    </Container>
  );
};

export default OtherProjects;
