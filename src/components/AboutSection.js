import React from 'react';
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
import photo from '../assets/images/cv_photo.jpg';

const AboutSection = () => {
  return (
    <Container maxW={'7xl'}>
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
              alt="Dan Abramov"
            />
          </Box>
        </Stack>
        <Stack as="div" flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
            >
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
          <Text as="div" color={'gray.500'}>
            Here are a few technologies I’ve been working with recently:
            <span style={{ display: 'flex' }}>
              <div>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.600" />
                    <Text color={'gray.500'} as="span">
                      React & Redux
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.600" />
                    <Text color={'gray.500'} as="span">
                      Node.js & Express.js
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.600" />
                    <Text color={'gray.500'} as="span">
                      JavaScript (ES6+)
                    </Text>
                  </ListItem>
                </List>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.600" />
                    <Text color={'gray.500'} as="span">
                      TypeScript
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.600" />
                    <Text color={'gray.500'} as="span">
                      Google Cloud Platform
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.600" />
                    <Text color={'gray.500'} as="span">
                      Dialogflow
                    </Text>
                  </ListItem>
                </List>
              </div>
            </span>
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutSection;
