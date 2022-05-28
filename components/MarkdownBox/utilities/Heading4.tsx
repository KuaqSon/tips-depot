import { Heading } from '@chakra-ui/react';
import React from 'react';

const Heading4 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Heading as="h4" size="md">
      {children}
    </Heading>
  </>
);

export default Heading4;
