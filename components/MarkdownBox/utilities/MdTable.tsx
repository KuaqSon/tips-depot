import { Table, TableContainer, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const MdTable = ({ children }: { children: React.ReactNode }) => (
  <TableContainer whiteSpace="normal" my={4} bg={useColorModeValue('gray.50', 'gray.600')} borderRadius="10px">
    <Table variant="striped">{children}</Table>
  </TableContainer>
);

export default MdTable;
