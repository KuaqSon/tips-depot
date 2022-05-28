import { Heading } from '@chakra-ui/react';
import React from 'react';

const Heading5 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Heading as="h5" size="sm">
      {children}
    </Heading>
  </>
);

export default Heading5;
