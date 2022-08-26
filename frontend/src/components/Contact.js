import React, { useRef } from 'react';
import { Formik } from 'formik';
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
  Tooltip,
  FormErrorMessage,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import FAIcons from './FAIcons';
import socialLinks from '../socialLinks';
import { AttentionSeeker } from 'react-awesome-reveal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deployNotification } from '../redux/actions';
import validateFormValues from '../utils/validateForm';

const Contact = () => {
  const ref = useRef();

  const [isMobile] = useMediaQuery('(max-width: 900px)');

  const initialValues = { name: '', email: '', message: '' };
  const dispatch = useDispatch();
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    return (async () => {
      const body = {
        senderName: values.name,
        senderEmail: values.email,
        body: values.message,
      };
      try {
        const response = await axios.post(
          'https://izokirov-api.herokuapp.com/api/contactform',
          body
        );
        if (response.status === 200) {
          // thank user
          const notification = {
            title: 'Form successfully submitted!',
            description:
              'Thank you very much for submitting the form. I will reply to your message within three business days!',
            status: 'success',
          };
          dispatch(deployNotification(notification));
        }

        resetForm();
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    })();
  };

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
          <AttentionSeeker effect="pulse">
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
              ref={ref}
            >
              Let`s connect
            </Text>
          </AttentionSeeker>
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
          <Formik
            initialValues={initialValues}
            validate={validateFormValues}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <FormControl
                  id="name"
                  m={2}
                  style={{ width: '100%' }}
                  isInvalid={errors.name && touched.name}
                >
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      size="md"
                      placeholder="Jon Doe"
                      required
                    />
                  </InputGroup>
                  {errors.name && touched.name && (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  id="email"
                  m={2}
                  isInvalid={errors.email && touched.email}
                >
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
                    <Input
                      type="email"
                      size="md"
                      placeholder="jon.doe@example.com"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                  </InputGroup>
                  {errors.email && touched.email && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  id="message"
                  m={2}
                  isInvalid={errors.message && touched.message}
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: 'gray.300',
                    }}
                    placeholder="Start typing ..."
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl id="name" m={2}>
                  <Button
                    onClick={handleSubmit}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Send Message
                  </Button>
                </FormControl>
              </>
            )}
          </Formik>
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
            <AttentionSeeker effect="headShake">
              <Tooltip label="Call my cell">
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
              </Tooltip>
            </AttentionSeeker>
            <AttentionSeeker effect="headShake">
              <Tooltip label="Send me an email">
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
              </Tooltip>
            </AttentionSeeker>
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
                <Tooltip label={`Find me on ${item.name}`} key={item.name}>
                  <IconButton
                    style={{
                      margin: '5px',
                    }}
                    aria-label={`${item.name} account`}
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
                </Tooltip>
              );
            })}
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Contact;
