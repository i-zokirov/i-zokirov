import React from 'react';
import { Box } from '@chakra-ui/react';
const Feature = ({ children, width, height, radius, p, ...rest }) => {
  return (
    <Box
      p={p}
      borderRadius={radius}
      width={width}
      height={height}
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Feature;
