import React, { useRef } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import FAIcons from './FAIcons';
import socialLinks from '../socialLinks';
import Pulse from 'react-reveal/Pulse';
import useOnScreen from '../hooks/useOnScreen';
import HeadShake from 'react-reveal/HeadShake';
const Contact = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  return (
    <Container maxW={'7xl'} id="contact">
      <Stack
        spacing={{ base: 8, md: 10 }}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          style={{ marginTop: '60px' }}
        >
          <Pulse spy={isVisible}>
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
              ref={ref}
            >
              Let`s connect
            </Text>
          </Pulse>
        </Heading>
      </Stack>
      <SimpleGrid columns={isMobile ? 1 : 2}>
        <Box
          borderRadius="lg"
          style={{
            // marginTop: !isMobile ? '80px' : 'auto',
            padding: '0px 20px 20px 20px ',
            height: !isMobile && '80vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Heading as="h4" size="md" m={2}>
            Leave your message and I will get back to you
          </Heading>
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
              <Input type="text" size="md" placeholder="jon.doe@example.com" />
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
        <Box
          style={{
            padding: '0px 20px 0px 20px ',
            height: !isMobile && '80vh',
            display: 'flex',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Heading as="h4" size="md" m={2}>
              Or contact me via
            </Heading>
            <HeadShake>
              <Button
                size="md"
                height="48px"
                width="auto"
                variant="ghost"
                _hover={{ border: '2px solid #1C6FEB' }}
                leftIcon={
                  <FAIcons className={'fa-solid fa-phone'} size="20px" />
                }
                as={'a'}
                href={`tel:+48519146293`}
              >
                +48 519 146 293
              </Button>
            </HeadShake>
            <HeadShake>
              <Button
                size="md"
                height="48px"
                width="auto"
                variant="ghost"
                _hover={{ border: '2px solid #1C6FEB' }}
                leftIcon={
                  <FAIcons className={'fa-solid fa-envelope'} size="20px" />
                }
                as="a"
                href="mailto:izokirov@outlook.com"
              >
                izokirov@outlook.com
              </Button>
            </HeadShake>
          </Box>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
      </SimpleGrid>
    </Container>
  );
};

export default Contact;
