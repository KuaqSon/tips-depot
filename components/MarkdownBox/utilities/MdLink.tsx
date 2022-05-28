import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';

const MdLink = (props: any) => (
  <ChakraLink href={props.href} isExternal={true} color="link">
    {props.children}
  </ChakraLink>
);

export default MdLink;
