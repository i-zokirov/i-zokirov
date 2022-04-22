import React from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import Feature from '../components/Feature';
import FAIcons from '../components/FAIcons';
const Contact = () => {
  return (
    <Container
      height={'100vh'}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Feature
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box
          //   bg="#A0AEC0"
          // color="white"
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack
                        pl={0}
                        spacing={3}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          style={{ textAlign: 'left' }}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={
                            <FAIcons
                              className={'fa-solid fa-phone'}
                              size="20px"
                            />
                          }
                        >
                          +48 519 146 293
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={
                            <FAIcons
                              className={'fa-solid fa-envelope'}
                              size="20px"
                            />
                          }
                        >
                          izokirov@outlook.com
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 5, md: 5 }}
                      spacing={5}
                      px={2}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="linkedin account"
                        as="a"
                        href="https://www.linkedin.com/in/ikboljon-zokirov"
                        variant="ghost"
                        size="lg"
                        icon={
                          <FAIcons
                            className={'fa-brands fa-linkedin'}
                            size="28px"
                          />
                        }
                      />
                      <IconButton
                        aria-label="instagram account"
                        as="a"
                        href="https://instagram.com/_izokirov?igshid=YmMyMTA2M2Y="
                        variant="ghost"
                        size="lg"
                        icon={
                          <FAIcons
                            className={'fa-brands fa-instagram'}
                            size="28px"
                          />
                        }
                      />
                      <IconButton
                        aria-label="github account"
                        as="a"
                        href="https://github.com/i-zokirov"
                        variant="ghost"
                        size="lg"
                        icon={
                          <FAIcons
                            className={'fa-brands fa-github'}
                            size="28px"
                          />
                        }
                      />
                      <IconButton
                        aria-label="telegram blog"
                        variant="ghost"
                        as="a"
                        href="https://t.me/ikboljonzokirov"
                        size="lg"
                        icon={
                          <FAIcons
                            className={'fa-brands fa-telegram'}
                            size="28px"
                          />
                        }
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={5} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={
                                <FAIcons
                                  className={'fa-solid fa-envelope'}
                                  size="20px"
                                />
                              }
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            colorScheme="teal"
                            variant="solid"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Feature>
      </Flex>
    </Container>
  );
};

export default Contact;
