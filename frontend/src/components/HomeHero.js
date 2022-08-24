import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import Pulse from 'react-reveal/Pulse';
import socialLinks from '../socialLinks';
import CodeCard from './CodeCard';
import useOnScreen from '../hooks/useOnScreen';
import Typewriter from 'typewriter-effect';
import Jump from 'react-reveal/Jump';

import './hero.css';
const HomeHero = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const buttonRef = useRef();
  const isBtnVisible = useOnScreen(buttonRef);

  return (
    <Container maxW={'7xl'} id="homehero">
      <Stack
        align={'center'}
        justify={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} marginTop={'60px'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            align={matches ? 'left' : 'center'}
          >
            <Pulse spy={isVisible}>
              <Text
                as={'span'}
                style={{ fontFamily: 'monospace' }}
                color={'green.400'}
                ref={ref}
              >
                Hello World!
              </Text>
            </Pulse>
          </Heading>
          <Heading
            lineHeight={1}
            fontWeight={650}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'div'}
              color={'gray.500'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('I’m Ikboljon.')
                    .pauseFor(1000)
                    .typeString('<br/> I build stuff for the web.')
                    .start();
                }}
              />
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            I’m a Fullstack JavaScript developer specializing in building and
            designing exceptional digital experiences.
          </Text>
          <Text color={'gray.500'}>
            Currently, I’m focused on building single-page web applications,
            conversational chatbots and creating & integrating RESTful web API
            integrations at Capgemini.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            align={matches ? 'left' : 'center'}
          >
            <Jump spy={isBtnVisible}>
              <Button
                size={'lg'}
                colorScheme="teal"
                variant="outline"
                fontWeight={'normal'}
                px={6}
                ref={buttonRef}
              >
                Download CV
              </Button>
            </Jump>
          </Stack>
          <Box align={matches ? 'left' : 'center'}>
            {socialLinks.map(item => (
              <IconButton
                style={{ margin: '5px' }}
                key={item.name}
                size="lg"
                fontSize="30px"
                variant="ghost"
                color="current"
                icon={
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`social-buttons__button social-button social-button--${item.name}`}
                    aria-label="Linkedin"
                  >
                    <i className={item.iconClass}></i>
                  </a>
                }
              />
            ))}
          </Box>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'auto'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <CodeCard />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export const Blob = props => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default HomeHero;
