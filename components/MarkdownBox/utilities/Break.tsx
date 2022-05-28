import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Break = () => (
  <Box
    as="hr"
    height={4}
    borderBottom="3px"
    borderTopWidth={0}
    my={2}
    borderStyle="solid"
    borderColor={useColorModeValue('rgba(0,0,0,0.16)', 'rgba(255,255,255,0.24)')}
  />
);

export default Break;
