import { Box, Center, Container, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HEADER_HEIGHT, MAX_WIDTH_SIZE } from 'utils/constants';

export default function Header() {
  return (
    <Box h={`${HEADER_HEIGHT}px`} position="fixed" top={0} left={0} right={0}>
      <Container maxW={MAX_WIDTH_SIZE} h="full">
        <Center h="full" borderBottom="1px solid #222222">
          <Link href="/">
            <Box textAlign="center" fontWeight="bold" fontSize="20px" cursor="pointer">
              Tips Depot
            </Box>
          </Link>
        </Center>
      </Container>
    </Box>
  );
}
