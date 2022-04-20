import React from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
  Icon,
  Image,
  Box,
} from '@chakra-ui/react';
import Feature from './Feature';
import FAIcons from './FAIcons';

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
    title: 'API Development & Integration',
    className: 'fa-solid fa-circle-nodes',
  },
];

const ServicesSection = () => {
  return (
    <Container height={'100vh'} maxW={'7xl'} style={{ marginTop: '20px' }}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'}>Things I love</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Stack>
      <Stack
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: '40px',
        }}
      >
        {whatIDo.map(item => (
          <Feature
            justifyContent="center"
            align="center"
            p={4}
            radius={'20px'}
            width={300}
            height={300}
          >
            <div
              style={{
                //   backgroundColor: 'RGBA(0, 0, 0, 0.04)',
                fontSize: '80px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                boxShadow: 'inherit',
              }}
            >
              <FAIcons className={item.className} />
            </div>
            <Heading fontSize={'3xl'}>{item.title}</Heading>
          </Feature>
        ))}
      </Stack>
    </Container>
  );
};

export default ServicesSection;
