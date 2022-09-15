import { Heading } from '@chakra-ui/react';
import React from 'react';

const Heading2 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Heading as="h2" size="xl" mt="4">
      {children}
    </Heading>
  </>
);

export default Heading2;
