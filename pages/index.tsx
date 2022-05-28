import { Box, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import fs from 'fs';
import { join } from 'path';
import { CATEGORIES_DIR } from 'utils/constants';
import Link from 'next/link';
import { unSlugify } from 'utils/helpers';
import PageTransition from 'components/PageTransition';
import SEO from 'components/SEO';

const Home: NextPage<{ categories: string[] }> = ({ categories }) => {
  return (
    <>
      <SEO />
      <PageTransition>
        <Box>
          <VStack>
            {categories.map((c) => (
              <Link key={c} href={`/${c}`}>
                {unSlugify(c)}
              </Link>
            ))}
          </VStack>
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
