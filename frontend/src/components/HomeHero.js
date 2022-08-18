import React, { useState, useEffect } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorMode,
  Code,
  Link,
} from '@chakra-ui/react';
import Feature from './Feature';

const codeStyle = {
  marginTop: '0px',
  marginBottom: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
};

const HomeHero = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const { colorMode } = useColorMode();
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        justify={'center'}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 20, md: 28 }}
        py={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            align={matches ? 'left' : 'center'}
          >
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
            >
              Hello World!
            </Text>
          </Heading>
          <Heading
            lineHeight={1.1}
            fontWeight={650}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text as={'p'} color={'gray.400'} position={'relative'}>
              I’m Ikboljon
            </Text>

            <Text
              color={'gray.500'}
              as={'p'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              I build stuff for the web.
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            I’m a Fullstack JavaScript developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building chatbots and creating RESTful web API
            integrations at Capgemini.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            align={matches ? 'left' : 'center'}
          >
            <Button
              //   rounded={'full'}
              size={'lg'}
              colorScheme="teal"
              variant="outline"
              fontWeight={'normal'}
              px={6}

              //   _hover={{ bg: 'gray.300' }}
            >
              Download CV
            </Button>
          </Stack>
          <Box align={matches ? 'left' : 'center'}>
            <IconButton
              size="lg"
              fontSize="30px"
              variant="ghost"
              color="current"
              icon={
                <a
                  href="https://www.linkedin.com/in/ikboljon-zokirov"
                  className="social-buttons__button social-button social-button--linkedin"
                  aria-label="Linkedin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              }
            />
            <IconButton
              size="lg"
              fontSize="30px"
              variant="ghost"
              color="current"
              marginLeft="2"
              icon={
                <a
                  href="https://instagram.com/_izokirov?igshid=YmMyMTA2M2Y="
                  className="social-buttons__button social-button social-button--instagram"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              }
            />
            <IconButton
              size="lg"
              fontSize="30px"
              variant="ghost"
              color="current"
              marginLeft="2"
              icon={
                <a
                  href="https://github.com/i-zokirov"
                  className="social-buttons__button social-button social-button--github"
                  aria-label="github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              }
            />
            <IconButton
              size="lg"
              fontSize="30px"
              variant="ghost"
              color="current"
              marginLeft="2"
              icon={
                <a
                  href="https://t.me/ikboljonzokirov"
                  className="social-buttons__button social-button social-button--telegram"
                  aria-label="telegram"
                >
                  <i className="fa-brands fa-telegram"></i>
                </a>
              }
            />
          </Box>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          {/* <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('green.50', 'green.400')}
          /> */}
          <Box
            position={'relative'}
            height={'auto'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Feature height={'auto'} width={'full'} p={6} rounded={'2xl'}>
              <Stack direction="column">
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  1 class Person &#123;{' '}
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  2 &nbsp; constructer() &#123;
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  3 &nbsp; &nbsp; this.name = "Ikboljon Zokirov"
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  4 &nbsp; &nbsp; this.traits = ["Developer"]
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  5 &nbsp; &nbsp; this.age = this.age = new Date().getFullYear()
                  - 2000;
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  6 &nbsp; &nbsp; this.hobbies = ["Coding"]
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  7 &nbsp; &#125;
                </Code>
                <Code
                  variant="subtle"
                  colorScheme={colorMode === 'light' ? 'yellow' : 'teal'}
                  style={codeStyle}
                >
                  8 &#125;
                </Code>
              </Stack>
            </Feature>

            {/* <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            /> */}
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

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
