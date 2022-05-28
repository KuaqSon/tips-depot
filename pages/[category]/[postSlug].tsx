import { IPost } from 'utils/types';
import fs from 'fs';
import { groupByCategory, loadSnippets, shuffle, slugify, unSlugify } from 'utils/helpers';
import { CATEGORIES_DIR } from 'utils/constants';
import { join } from 'path';
import matter from 'gray-matter';
import { Box, Container, VStack } from '@chakra-ui/react';
import MarkdownBox from 'components/MarkdownBox';
import PageTransition from 'components/PageTransition';
import BreadcrumbBar from 'components/BreadcrumbBar';
import SEO from 'components/SEO';
import Link from 'next/link';
import TimeAgo from 'timeago-react';

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
      <VStack alignItems="center" py={4}>
        <Box fontSize="24px" fontWeight="bold">
          {post.title}
        </Box>
        <BreadcrumbBar links={links} />
      </VStack>
      <PageTransition>
        <Container>
          <TimeAgo datetime={frontMatter.updated} />
          <Box>
            <MarkdownBox>{content}</MarkdownBox>
          </Box>
          <Box>
            <Box>Other Posts</Box>
            <VStack>
              {otherPosts?.map((p) => (
                <Link key={p.slug} href={`/${p.href}`}>
                  {p.title}
                </Link>
              ))}
            </VStack>
          </Box>
          <Box>
            <Box>Categories</Box>
            <VStack>
              {categories.map((c) => (
                <Link key={c} href={`/${slugify(c)}`}>
                  {unSlugify(c)}
                </Link>
              ))}
            </VStack>
          </Box>
        </Container>
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
  const otherPosts = shuffle(posts.filter((p) => p.slug !== postSlug)).slice(0, 6);

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
