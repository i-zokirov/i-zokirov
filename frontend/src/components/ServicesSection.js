import React, { useRef } from 'react';
import { Container, Stack, Heading, Text } from '@chakra-ui/react';
import { AttentionSeeker } from 'react-awesome-reveal';
import Feature from './Feature';
import FAIcons from './FAIcons';
import './services.css';

const whatIDo = [
  {
    title: 'Frontend Development',
    className: 'fa-solid fa-code',
    text: 'Experienced React developer. Proficient in Material UI, Chakra UI, Bootstrap and Semantic UI',
  },
  {
    title: 'Backend Development',
    className: 'fa-solid fa-terminal',
    text: 'Experienced in developing web applications and APIs in Node.js environment',
  },
  {
    title: 'Chatbot Development',
    className: 'fa-solid fa-robot',
    text: 'Conversational chatbots with Dialogflow CX & ES ',
  },
  {
    title: 'API Development & Integration',
    className: 'fa-solid fa-circle-nodes',
    text: 'Creating & Integrating RESTful web API integrations',
  },
  {
    title: 'Database Design',
    className: 'fa-solid fa-database',
    text: 'SQL and NoSQL databases. MongoDB, Cloud Datastore & BigQuery just to name a few',
  },
  {
    title: 'Cloud Services',
    className: 'fa-solid fa-cloud',
    text: 'Worked with Google Cloud Platform (e.g. App Engine or Cloud Functions)',
  },
];

const ServicesSection = () => {
  const ref = useRef();

  return (
    <Container maxW={'7xl'} style={{ marginTop: '40px' }}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading lineHeight={1.1} fontWeight={600} id="services">
          <AttentionSeeker effect="pulse">
            <Text
              as={'span'}
              style={{ fontFamily: 'monospace' }}
              color={'green.400'}
              ref={ref}
            >
              Things I do
            </Text>
          </AttentionSeeker>
        </Heading>
      </Stack>

      <Stack
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '40px',
          flexWrap: 'wrap',
        }}
      >
        {whatIDo.map(item => (
          <Feature
            className="service-card"
            justifyContent="center"
            align="center"
            p={4}
            radius={'20px'}
            width={300}
            height={'auto'}
            style={{ margin: '20px' }}
            key={item.title}
          >
            <span
              style={{
                //   backgroundColor: 'RGBA(0, 0, 0, 0.04)',
                fontSize: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                // boxShadow: 'inherit',
                flexDirection: 'column',
              }}
            >
              <FAIcons className={item.className} />
            </span>
            <Heading fontSize={'xl'}>{item.title}</Heading>
            <br />
            <Text color={'gray.500'} fontSize={'md'}>
              {item.text}
            </Text>
          </Feature>
        ))}
      </Stack>
    </Container>
  );
};

export default ServicesSection;
