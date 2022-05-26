import { Box, Center, Container } from '@chakra-ui/react';
import { HEADER_HEIGHT, MAX_WIDTH_SIZE } from 'utils/constants';

export default function Footer() {
  return (
    <Box h={`${HEADER_HEIGHT}px`}>
      <Container maxW={MAX_WIDTH_SIZE} h="full">
        <Center h="full">Made by Quang Son Nguyen with ❤️</Center>
      </Container>
    </Box>
  );
}
