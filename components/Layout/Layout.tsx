import { Box, Container, SlideFade } from '@chakra-ui/react';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAX_WIDTH_SIZE } from 'utils/constants';

const meta = {
  title: 'Tips Depot - Son Nguyen',
  description: 'Share tips for software engineers',
  image: 'https://nqson.com/static/nqson-banner.png',
  type: 'website',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Box>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://tips.nqson.com${router.asPath}`} />
        <link rel="canonical" href={`https://tips.nqson.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quangsonnguyen2" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Header />
      <Container
        maxW={MAX_WIDTH_SIZE}
        minHeight={`calc(100vh - ${+HEADER_HEIGHT + +FOOTER_HEIGHT}px)`}
        mt={`${HEADER_HEIGHT}px`}
        pt={4}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
