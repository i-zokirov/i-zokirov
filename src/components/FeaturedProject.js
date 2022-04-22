import React, { useState, useEffect } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
  Link,
  Image,
  Box,
  ListItem,
  ListIcon,
  List,
  useColorMode,
  Button,
} from '@chakra-ui/react';

import Feature from './Feature';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import './features.css';

const FeaturedProject = ({
  title,
  imageUrl,
  demoLink,
  githubLink,
  stacks,
  position,
  description,
}) => {
  const [displayPosition, setDisplayPosition] = useState(position || 'left');
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  const { colorMode } = useColorMode();

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (!matches) {
      setDisplayPosition('left');
    } else {
      setDisplayPosition(position);
    }
  }, [matches]);

  return (
    <>
      {displayPosition === 'left' ? (
        <Stack
          height="auto"
          display={'flex'}
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Container
            maxW="4xl"
            style={{ marginRight: `${matches ? '-40px' : '0'}`, zIndex: -1 }}
          >
            <Image
              className="hover"
              height={'max-content'}
              rounded={'2xl'}
              src={imageUrl}
            />
          </Container>
          <Container
            style={{
              marginLeft: `${matches ? '-40px' : '0'}`,
              marginTop: '30px',
              zIndex: 9999,
            }}
          >
            <Feature
              height="auto"
              width="full"
              p={5}
              boxShadow="2xl"
              rounded={'2xl'}
              backgroundColor={colorMode === 'light' ? 'white' : '#1A202C'}
            >
              <Heading fontSize={'20px'} align="right" fontWeight={400}>
                <Text as={'span'} color={'green.400'}>
                  {title}
                </Text>
              </Heading>
              <br />
              <Text as={'span'} color={'grey.400'}>
                {description}
              </Text>
              <br />
              <div>
                Main Tech stack:
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: `${matches ? 'row' : 'column'}`,
                  }}
                >
                  <Box>
                    <List spacing={3}>
                      {stacks.map(stack => (
                        <ListItem key={stack}>
                          <ListIcon as={ChevronRightIcon} color="green.600" />
                          <Text as="span">{stack}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  {/* {!matches && <br />}
                  <Box style={{ paddingLeft: `${matches ? '20px' : '0'}` }}>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.600" />
                        <Text as="span">TypeScript</Text>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.600" />
                        <Text as="span">Google Cloud Platform</Text>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.600" />
                        <Text as="span">Dialogflow</Text>
                      </ListItem>
                    </List>
                  </Box> */}
                </Box>
              </div>
              <br />
              <Link href="/" isExternal>
                Read more here ...
              </Link>
              <br />
              <br />
              <Button as={'a'} href={demoLink}>
                Live Demo <ExternalLinkIcon mx="2px" />
              </Button>
              <Button as={'a'} marginLeft={5} href={githubLink}>
                Github Repo <ExternalLinkIcon mx="2px" />
              </Button>
            </Feature>
          </Container>
        </Stack>
      ) : (
        <Stack
          height="auto"
          display={'flex'}
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Container
            style={{
              marginRight: `-40px`,
              marginTop: '30px',
              zIndex: 9999,
            }}
          >
            <Feature
              height="auto"
              width="full"
              p={5}
              boxShadow="2xl"
              rounded={'2xl'}
              backgroundColor={colorMode === 'light' ? 'white' : '#1A202C'}
            >
              <Heading fontSize={'20px'} align="left" fontWeight={400}>
                <Text as={'span'} color={'green.400'}>
                  {title}
                </Text>
              </Heading>
              <br />
              <Text as={'span'} color={'grey.400'}>
                {description}
              </Text>
              <br />
              <div>
                Main Tech stack:
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: `${matches ? 'row' : 'column'}`,
                  }}
                >
                  <Box>
                    <List spacing={3}>
                      <List spacing={3}>
                        {stacks.map(stack => (
                          <ListItem key={stack}>
                            <ListIcon as={ChevronRightIcon} color="green.600" />
                            <Text as="span">{stack}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </List>
                  </Box>
                  {/* {!matches && <br />}
                  <Box style={{ paddingLeft: `${matches ? '20px' : '0'}` }}>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.600" />
                        <Text as="span">TypeScript</Text>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.600" />
                        <Text as="span">Google Cloud Platform</Text>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.600" />
                        <Text as="span">Dialogflow</Text>
                      </ListItem>
                    </List>
                  </Box> */}
                </Box>
              </div>
              <br />
              <Link href="/" isExternal>
                Read more here ...
              </Link>
              <br />
              <br />
              <Button as={'a'} href={demoLink}>
                Live Demo <ExternalLinkIcon mx="2px" />
              </Button>
              <Button as={'a'} marginLeft={5} href={githubLink}>
                Github Repo <ExternalLinkIcon mx="2px" />
              </Button>
            </Feature>
          </Container>
          <Container maxW="4xl" style={{ marginLeft: `-40px`, zIndex: -1 }}>
            <Image
              className="hover"
              height={'max-content'}
              rounded={'2xl'}
              src={imageUrl}
            />
          </Container>
        </Stack>
      )}
    </>
  );
};

export default FeaturedProject;
