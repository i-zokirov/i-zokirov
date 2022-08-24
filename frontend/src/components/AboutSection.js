import React, { useRef } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  ListItem,
  ListIcon,
  List,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import Pulse from 'react-reveal/Pulse';
import useOnScreen from '../hooks/useOnScreen';
import photo from '../assets/images/cv_photo.jpg';

const techs = [
  'React.js',
  'Redux',
  'JavaScript',
  'Node.js',
  'Express.js',
  'TypeScript',
  'Socket.io',
  'Google Cloud Platform',
  'Dialogflow ES & CX',
  'Material UI',
  'Booststrap',
  'HTML & CSS',
];

const AboutSection = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <Container maxW={'7xl'} id="about">
      <Stack
        align={'center'}
        justify={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 20 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box
            as="div"
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
              alt="Ikboljon Zokirov"
            />
          </Box>
        </Stack>
        <Stack as="div" flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Pulse spy={isVisible}>
              <Text
                as={'span'}
                style={{ fontFamily: 'monospace' }}
                color={'green.400'}
                ref={ref}
              >
                Me, Myself & I
              </Text>
            </Pulse>
          </Heading>

          <Text color={'gray.500'}>
            I’m a JavaScript developer specializing in building full-stack web
            applications. Currently, I’m working at{' '}
            <Link href={'https://www.capgemini.com/'} isExternal>
              Capgemini <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            and building exceptional digital experiences.
          </Text>

          <Text as="div" color={'gray.500'}>
            Here are a few technologies I’ve been working with recently:
            <List>
              {techs.map(tech => (
                <ListItem key={tech}>
                  <ListIcon as={ChevronRightIcon} color="green.600" />
                  <Text color={'gray.500'} as="span">
                    {tech}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Text>
          <Text color={'gray.500'}>
            <Link as={ScrollLink} to="homehero" activeClass="active" smooth spy>
              Download my CV{' '}
            </Link>{' '}
            to know more about me.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutSection;
