/* eslint-disable react-hooks/rules-of-hooks */
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export default function NextLinkBox({
  children,
  href,
  variant = 'solid',
}: {
  children: React.ReactNode;
  href: string;
  variant?: string;
}) {
  const variantStyle =
    variant === 'outline'
      ? {
          border: '1px',
          borderStyle: 'solid',
          borderColor: useColorModeValue('rgba(0,0,0,0.16)', 'rgba(255,255,255,0.24)'),
          _hover: {
            color: 'link',
            borderColor: 'link',
          },
        }
      : {};

  return (
    <Flex width={{ base: '100%', md: '50%' }}>
      <Link href={href}>
        <Flex
          flex={1}
          flexDirection="column"
          justify="center"
          align="flex-start"
          bg={useColorModeValue('#ffffff', '#000000')}
          p={4}
          m={2}
          borderRadius="8px"
          cursor="pointer"
          transition="all .3s"
          _hover={{ color: 'link' }}
          {...variantStyle}
        >
          {children}
        </Flex>
      </Link>
    </Flex>
  );
}
