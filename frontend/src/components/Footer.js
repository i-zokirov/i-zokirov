import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link as={ScrollLink} to={'homehero'} activeClass="active" smooth spy>
            Home
          </Link>

          <Link as={ScrollLink} to={'contact'} activeClass="active" smooth spy>
            Contact
          </Link>
        </Stack>
        <Text>© 2022. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
