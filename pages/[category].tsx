import { Box, VStack } from '@chakra-ui/react';
import { IPost } from 'utils/types';
import fs from 'fs';
import { join } from 'path';
import { CATEGORIES_DIR } from 'utils/constants';
import { loadSnippetsOfCategory, unslugifyCategory } from 'utils/helpers';
import Link from 'next/link';

interface CategoryPageParams {
  category: string;
}
interface CategoryPageProps {
  categories: string[];
  category: string;
  posts: IPost[];
}

export default function CategoryPage({ categories, category, posts }: CategoryPageProps) {
  return (
    <Box>
      <Box>{category}</Box>
      <Box>
        <Box>Posts</Box>
        <Box>
          <VStack>
            {posts.map((p) => (
              <Link key={p.slug} href={`/${p.href}`}>
                {p.title}
              </Link>
            ))}
          </VStack>
        </Box>
      </Box>
      <Box>
        <Box>Categories</Box>
        <VStack>
          {categories.map((c) => (
            <Link key={c} href={`/${c}`}>
              {unslugifyCategory(c)}
            </Link>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export const getStaticProps = async ({ params }: { params: CategoryPageParams }) => {
  const { category } = params;
  const categories = fs.readdirSync(join(CATEGORIES_DIR));
  const posts = loadSnippetsOfCategory(category);

  return {
    props: {
      categories,
      category,
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const paths: any[] = [];

  const folders = fs.readdirSync(join(CATEGORIES_DIR));
  folders.forEach((folder) => {
    paths.push({
      params: {
        category: folder,
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
};
