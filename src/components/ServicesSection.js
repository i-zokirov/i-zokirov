import React from 'react';
import { Container, Stack, Heading, Text } from '@chakra-ui/react';
import Feature from './Feature';
import FAIcons from './FAIcons';
import './services.css';

const whatIDo = [
  {
    title: 'Frontend Development',
    className: 'fa-solid fa-code',
  },
  {
    title: 'Backend Development',
    className: 'fa-solid fa-terminal',
  },
  {
    title: 'Chatbot Development',
    className: 'fa-solid fa-robot',
  },
  {
    title: 'API Development & Integration',
    className: 'fa-solid fa-circle-nodes',
  },
  {
    title: 'Database Design & Maintenance',
    className: 'fa-solid fa-database',
  },
  {
    title: 'Cloud Services',
    className: 'fa-solid fa-cloud',
  },
];

const ServicesSection = () => {
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
            Things I love
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={'xl'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
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
        {whatIDo.map(item => (
          <Feature
            className="service-card"
            justifyContent="center"
            align="center"
            p={4}
            radius={'20px'}
            width={300}
            height={'auto'}
            style={{ margin: '20px' }}
            key={item.title}
          >
            <span
              style={{
                //   backgroundColor: 'RGBA(0, 0, 0, 0.04)',
                fontSize: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: '50%',
                width: '150px',
                height: '160px',
                // boxShadow: 'inherit',
                flexDirection: 'column',
              }}
            >
              <FAIcons className={item.className} />
            </span>
            <Heading fontSize={'xl'}>{item.title}</Heading>
            <Text color={'gray.500'} fontSize={'md'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </Text>
          </Feature>
        ))}
      </Stack>
    </Container>
  );
};

export default ServicesSection;
