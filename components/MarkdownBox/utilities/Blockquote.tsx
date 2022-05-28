import { Box, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack alignItems="stretch" p={0} my={2} color={useColorModeValue('gray.600', 'gray.400')}>
      <Box width="4px" bg="gray.400" />
      <Box p={2}>{children}</Box>
    </HStack>
  );
};

export default Blockquote;
