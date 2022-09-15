import { Heading } from '@chakra-ui/react';
import React from 'react';

const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Heading as="h1" size="2xl" mt="4">
      {children}
    </Heading>
  </>
);

export default Heading1;
