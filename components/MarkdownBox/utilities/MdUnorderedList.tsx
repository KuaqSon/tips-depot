import { UnorderedList } from '@chakra-ui/react';
import React from 'react';

const MdUnorderedList = ({ children }: { children: React.ReactNode[] }) => {
  return <UnorderedList>{children}</UnorderedList>;
};

export default MdUnorderedList;
