import { Box, Container, Flex, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { IPost } from 'utils/types';
import fs from 'fs';
import { join } from 'path';
import { CATEGORIES_DIR } from 'utils/constants';
import { loadSnippetsOfCategory, slugify, unSlugify } from 'utils/helpers';
import PageTransition from 'components/PageTransition';
import BreadcrumbBar from 'components/BreadcrumbBar';
import SEO from 'components/SEO';
import NextLinkBox from 'components/NextLinkBox';

interface CategoryPageParams {
  category: string;
}
interface CategoryPageProps {
  categories: string[];
  category: string;
  posts: IPost[];
}

export default function CategoryPage({ categories, category, posts }: CategoryPageProps) {
  const links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: category,
      href: `/${slugify(category)}`,
    },
  ];

  return (
    <>
      <SEO
        customMeta={{
          title: `${category} - Tips Depot`,
        }}
      />

      <Box bg={useColorModeValue('bgLight', 'bgDark')}>
        <Container>
          <VStack alignItems="center" py="32px">
            <Heading>{category}</Heading>
            <BreadcrumbBar links={links} />
          </VStack>
        </Container>
      </Box>

      <PageTransition>
        <Container py="32px">
          <Box py={2} fontWeight="bold" fontSize="lg">
            Posts
          </Box>
          <Flex flexWrap="wrap" m={-2}>
            {posts.map((p) => (
              <NextLinkBox key={p.slug} href={`/${p.href}`} variant="outline">
                <Box fontWeight="600">{p.title}</Box>
              </NextLinkBox>
            ))}
          </Flex>
        </Container>
        <Box bg={useColorModeValue('bgLight', 'bgDark')}>
          <Container py="32px">
            <Box py={2} fontWeight="bold" fontSize="lg">
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
}

export const getStaticProps = async ({ params }: { params: CategoryPageParams }) => {
  const { category } = params;
  const categories = fs.readdirSync(join(CATEGORIES_DIR));
  const posts = loadSnippetsOfCategory(category);

  return {
    props: {
      categories,
      category: unSlugify(category),
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
