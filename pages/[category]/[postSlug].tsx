/* eslint-disable react-hooks/rules-of-hooks */
import { IPost } from 'utils/types';
import fs from 'fs';
import { groupByCategory, loadSnippets, shuffle, slugify, unSlugify } from 'utils/helpers';
import { CATEGORIES_DIR } from 'utils/constants';
import { join } from 'path';
import matter from 'gray-matter';
import { Badge, Box, Container, Flex, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import MarkdownBox from 'components/MarkdownBox';
import PageTransition from 'components/PageTransition';
import BreadcrumbBar from 'components/BreadcrumbBar';
import SEO from 'components/SEO';
import TimeAgo from 'timeago-react';
import NextLinkBox from 'components/NextLinkBox';

interface PostPageParams {
  category: string;
  postSlug: string;
}

interface PostPageProps {
  categories: string[];
  content: string;
  frontMatter: { [key: string]: any };
  post: IPost;
  otherPosts?: IPost[];
}

export default function PostPage({ categories, content, frontMatter, otherPosts, post }: PostPageProps) {
  const links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: unSlugify(post.category),
      href: `/${slugify(post.category)}`,
    },
    {
      label: post.title,
      href: `/${post.href}`,
    },
  ];

  return (
    <>
      <SEO
        customMeta={{
          title: `${post.title} - Tips Depot`,
        }}
      />
      <Box bg={useColorModeValue('bgLight', 'bgDark')}>
        <Container>
          <VStack alignItems="center" py="32px" textAlign="center">
            <Heading>{post.title}</Heading>
            <BreadcrumbBar links={links} />
          </VStack>
        </Container>
      </Box>
      <PageTransition>
        <Container py="24px">
          <Box lineHeight="1.8">
            <MarkdownBox>{content}</MarkdownBox>
          </Box>
          <Box mt={4}>
            <Badge>
              <Box textTransform="none">
                <TimeAgo datetime={frontMatter.updated} />
              </Box>
            </Badge>
          </Box>
        </Container>
        <Box bg={useColorModeValue('bgLight', 'bgDark')}>
          <Container>
            <Box py="24px">
              <Box py={2} fontSize="xl">
                Other Posts
              </Box>
              <Flex flexWrap="wrap" alignItems="stretch" m={-2}>
                {otherPosts?.map((p) => (
                  <NextLinkBox key={p.slug} href={`/${p.href}`}>
                    <Flex flexWrap="wrap" alignItems="baseline">
                      <Box fontWeight="600" mr={2}>
                        {p.title}
                      </Box>
                      <Box
                        fontSize="xs"
                        fontWeight="400"
                        textTransform="uppercase"
                        color={useColorModeValue('gray.500', 'gray.300')}
                      >
                        {p.category}
                      </Box>
                    </Flex>
                  </NextLinkBox>
                ))}
              </Flex>
            </Box>
            <Box py="24px">
              <Box py={2} fontSize="xl">
                Categories
              </Box>
              <Flex flexWrap="wrap" m={-2}>
                {categories.map((c) => (
                  <NextLinkBox key={c} href={`/${slugify(c)}`}>
                    <Box fontWeight="600">{unSlugify(c)}</Box>
                  </NextLinkBox>
                ))}
              </Flex>
            </Box>
          </Container>
        </Box>
      </PageTransition>
    </>
  );
}

export const getStaticProps = async ({ params }: { params: PostPageParams }) => {
  const posts = loadSnippets();

  const { category, postSlug } = params;
  const fileContents = fs.readFileSync(join(CATEGORIES_DIR, category, `${postSlug}.md`));
  const { data: frontMatter, content } = matter(fileContents);
  const index = posts.findIndex((s) => s.slug === postSlug);
  const categories = Object.keys(groupByCategory(posts));
  const otherPosts = shuffle(posts.filter((p) => p.slug !== postSlug)).slice(0, 8);

  return {
    props: {
      categories,
      content,
      frontMatter,
      post: posts[index],
      otherPosts,
    },
  };
};

export const getStaticPaths = async () => {
  const paths: any[] = [];

  const folders = fs.readdirSync(join(CATEGORIES_DIR));
  folders.forEach((folder) => {
    fs.readdirSync(join(CATEGORIES_DIR, folder)).forEach((file) => {
      paths.push({
        params: {
          category: folder,
          postSlug: file.replace('.md', ''),
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};
