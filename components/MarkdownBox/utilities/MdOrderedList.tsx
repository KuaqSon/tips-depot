import { OrderedList } from '@chakra-ui/react';
import React from 'react';

const MdOrderedList = ({ children }: { children: React.ReactNode[] }) => {
  return <OrderedList>{children}</OrderedList>;
};

export default MdOrderedList;
