import React from 'react';
import { Stack, Code, useColorMode } from '@chakra-ui/react';
import Feature from './Feature';
const codeStyle = {
  marginTop: '0px',
  marginBottom: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
};
const CodeCard = () => {
  const { colorMode } = useColorMode();
  return (
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
          5 &nbsp; &nbsp; this.age = this.age = new Date().getFullYear() - 2000;
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
  );
};

export default CodeCard;
