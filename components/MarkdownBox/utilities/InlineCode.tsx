import React from 'react';
import { Code as ChakraCode } from '@chakra-ui/react';

const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <ChakraCode colorScheme="red">{children}</ChakraCode>
);

export default InlineCode;
