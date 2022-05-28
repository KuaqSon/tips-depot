import React from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';

const MdImage = (props: any) => <ChakraImage src={props.src} alt={props.alt || ''} width="full" borderRadius="10px" />;

export default MdImage;
