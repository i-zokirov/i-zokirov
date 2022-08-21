import React from 'react';
import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import Feature from '../components/Feature';
import FAIcons from '../components/FAIcons';
import socialLinks from '../socialLinks';

const Contact = () => {
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  return (
    <Box
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Feature
          borderRadius="lg"
          style={{
            height: isMobile ? 'auto' : '70vh',
            width: 'auto',
            padding: '20px',
          }}
        >
          <SimpleGrid columns={isMobile ? 1 : 2}>
            <Box
              style={{
                padding: '0px 20px 0px 20px ',
              }}
            >
              <Heading>Contact</Heading>

              <Text
                mt={{ sm: 3, md: 3, lg: 5 }}
                color="gray.500"
                style={{ marginTop: !isMobile ? '80px' : '' }}
              >
                Leave your message and I will get back to you 🙂
              </Text>

              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Button
                  size="md"
                  height="48px"
                  width="auto"
                  variant="ghost"
                  _hover={{ border: '2px solid #1C6FEB' }}
                  leftIcon={
                    <FAIcons className={'fa-solid fa-phone'} size="20px" />
                  }
                >
                  +48 519 146 293
                </Button>
                <Button
                  size="md"
                  height="48px"
                  width="auto"
                  variant="ghost"
                  _hover={{ border: '2px solid #1C6FEB' }}
                  leftIcon={
                    <FAIcons className={'fa-solid fa-envelope'} size="20px" />
                  }
                >
                  izokirov@outlook.com
                </Button>
              </Box>

              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '20px',
                }}
              >
                {socialLinks.map(item => {
                  return (
                    <IconButton
                      style={{
                        margin: '5px',
                      }}
                      aria-label={`${item.name} account`}
                      key={item.name}
                      as="a"
                      href={item.link}
                      variant="ghost"
                      size="lg"
                      icon={
                        <FAIcons
                          className={item.iconClass}
                          style={{ fontSize: '28px' }}
                        />
                      }
                    />
                  );
                })}
              </Box>
            </Box>

            <Box
              borderRadius="lg"
              style={{
                marginTop: !isMobile ? '80px' : 'auto',
                padding: '0px 20px 20px 20px ',
              }}
            >
              <FormControl id="name" m={2} style={{ width: '100%' }}>
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" size="md" placeholder="Jon Doe" />
                </InputGroup>
              </FormControl>

              <FormControl id="name" m={2}>
                <FormLabel>Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <FAIcons className={'fa-solid fa-envelope'} size="20px" />
                    }
                  />
                  <Input
                    type="text"
                    size="md"
                    placeholder="jon.doe@example.com"
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="name" m={2}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: 'gray.300',
                  }}
                  placeholder="Start typing ..."
                />
              </FormControl>

              <FormControl id="name" m={2}>
                <Button colorScheme="teal" variant="solid" _hover={{}}>
                  Send Message
                </Button>
              </FormControl>
            </Box>
          </SimpleGrid>
        </Feature>
      </Box>
    </Box>
  );
};

export default Contact;
