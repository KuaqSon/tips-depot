import { Box, Container } from '@chakra-ui/react';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAX_WIDTH_SIZE } from 'utils/constants';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header />
      <Box minHeight={`calc(100vh - ${+HEADER_HEIGHT + +FOOTER_HEIGHT}px)`} mt={`${HEADER_HEIGHT}px`} pt={4}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
