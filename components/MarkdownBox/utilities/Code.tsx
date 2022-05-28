import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

import { Box, Code as ChakraCode } from '@chakra-ui/react';
import dracula from 'prism-react-renderer/themes/dracula';

const Code = (props: any) => {
  const {
    children,
    className,
    inline,
  }: {
    children: string | string[];
    className?: string;
    inline: boolean;
  } = props;
  const lang = className ? className.split('-').pop() : 'js';
  const code = Array.isArray(children) ? children[0].trim() : children.trim();

  return inline ? (
    <ChakraCode colorScheme="red">{code}</ChakraCode>
  ) : (
    <Highlight {...defaultProps} theme={dracula} code={code} language={lang as Language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box as="pre" className={className} style={style} padding={4} my={2} borderRadius="10px" overflowX="auto">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
};

export default Code;
