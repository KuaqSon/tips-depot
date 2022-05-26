import { Box, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import { join } from 'path';
import { CATEGORIES_DIR } from 'utils/constants';
import Link from 'next/link';
import { unslugifyCategory } from 'utils/helpers';

const Home: NextPage<{ categories: string[] }> = ({ categories }) => {
  return (
    <Box>
      <VStack>
        {categories.map((c) => (
          <Link key={c} href={`/${c}`}>
            {unslugifyCategory(c)}
          </Link>
        ))}
      </VStack>
    </Box>
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
