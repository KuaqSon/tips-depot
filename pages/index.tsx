import { Box, Container, Flex, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import fs from 'fs';
import { join } from 'path';
import { CATEGORIES_DIR } from 'utils/constants';
import { slugify, unSlugify } from 'utils/helpers';
import PageTransition from 'components/PageTransition';
import SEO from 'components/SEO';
import NextLinkBox from 'components/NextLinkBox';

const Home: NextPage<{ categories: string[] }> = ({ categories }) => {
  return (
    <>
      <SEO />

      <Container>
        <VStack alignItems="center" py="79px">
          <Heading>Tips Depot</Heading>
          <Box fontSize="lg">Tips for software engineers</Box>
        </VStack>
      </Container>

      <PageTransition>
        <Box bg={useColorModeValue('bgLight', 'bgDark')}>
          <Container py="32px">
            <Box pb="32px" fontSize="xl" textAlign="center">
              Categories
            </Box>
            <Flex flexWrap="wrap" m={-2}>
              {categories.map((c) => (
                <NextLinkBox key={c} href={`/${slugify(c)}`}>
                  <Box fontWeight="600">{unSlugify(c)}</Box>
                </NextLinkBox>
              ))}
            </Flex>
          </Container>
        </Box>
      </PageTransition>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const categories = fs.readdirSync(join(CATEGORIES_DIR));
  return {
    props: {
      categories,
    },
  };
}
