import { Heading } from '@chakra-ui/react';
import React from 'react';

const Heading6 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Heading as="h6" size="xs" mt="3">
      {children}
    </Heading>
  </>
);

export default Heading6;
