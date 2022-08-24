import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ProjectDetailHero from '../components/ProjectDetailHero';
import login from '../assets/projects/live-chat/login.png';
import register from '../assets/projects/live-chat/register.png';
import home_dark from '../assets/projects/live-chat/home_dark.png';
import home_light from '../assets/projects/live-chat/home_light.png';
import chat_dark from '../assets/projects/live-chat/chat_dark.png';
import chat_light from '../assets/projects/live-chat/chat_light.png';

const cards = [
  {
    title: '',
    text: '',
    image: home_dark,
  },
  {
    title: '',
    text: '',
    image: home_light,
  },
  {
    title: '',
    text: '',
    image: chat_dark,
  },
  {
    title: '',
    text: '',
    image: chat_light,
  },
  {
    title: '',
    text: '',
    image: register,
  },
  {
    title: '',
    text: '',
    image: login,
  },
];

const LiveChatProject = () => {
  return (
    <>
      <ProjectDetailHero cards={cards} />
      <Container maxW={'7xl'} marginTop={20}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Automatic Watch
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                style={{ fontFamily: 'monospace' }}
                color={'green.400'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Main Technologies
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                style={{ fontFamily: 'monospace' }}
                color={'green.400'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: '40px',
            }}
          >
            <Button
              mt={8}
              size={'lg'}
              py={'7'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              marginRight={'5px'}
            >
              Live Demo <ExternalLinkIcon mx="2px" />
            </Button>
            <Button
              mt={8}
              size={'lg'}
              py={'7'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              Github Repo <ExternalLinkIcon mx="2px" />
            </Button>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default LiveChatProject;