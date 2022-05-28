import { Heading } from '@chakra-ui/react';
import React from 'react';

const Heading3 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  </>
);

export default Heading3;
