import React from 'react';
import { Container, Stack, Heading, Text, Image, Box } from '@chakra-ui/react';
import photo from '../assets/images/cv_photo.jpg';

const AboutSection = () => {
  return (
    <Container height={'100vh'} maxW={'7xl'}>
      <Stack
        align={'center'}
        justify={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 20 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box
            shadow="md"
            borderWidth="1px"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
            }}
            width={{ base: '400px', sm: '200px', lg: '500px' }}
          >
            <Image
              style={{ borderRadius: '20px' }}
              width={{ base: '400px', sm: '200px', lg: '500px' }}
              src={photo}
              alt="Dan Abramov"
            />
          </Box>
        </Stack>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text as={'span'} color={'green.400'}>
              About Me
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building chatbots and creating API integrations at Capgemini.
          </Text>
          <Text color={'gray.500'}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building chatbots and creating API integrations at Capgemini.
          </Text>
          <Text color={'gray.500'}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building chatbots and creating API integrations at Capgemini.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutSection;
