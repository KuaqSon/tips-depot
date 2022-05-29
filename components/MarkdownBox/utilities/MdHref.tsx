import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';

const MdHref = (props: any) => (
  <ChakraLink href={props.href} isExternal={true} color="link">
    {props.children}
  </ChakraLink>
);

export default MdHref;
