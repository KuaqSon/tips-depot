import { IPost } from 'utils/types';
import fs from 'fs';
import { groupByCategory, loadSnippets, slugify, unSlugify } from 'utils/helpers';
import { CATEGORIES_DIR } from 'utils/constants';
import { join } from 'path';
import matter from 'gray-matter';
import { Box } from '@chakra-ui/react';
import MarkdownBox from 'components/MarkdownBox';
import PageTransition from 'components/PageTransition';
import BreadcrumbBar from 'components/BreadcrumbBar';
import SEO from 'components/SEO';

interface PostPageParams {
  category: string;
  postSlug: string;
}

interface PostPageProps {
  categories: string[];
  content: string;
  frontMatter: { [key: string]: any };
  prevPost?: IPost;
  nextPost?: IPost;
  post: IPost;
}

export default function PostPage({ categories, content, frontMatter, prevPost, nextPost, post }: PostPageProps) {
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
      <BreadcrumbBar links={links} />
      <PageTransition>
        <Box>
          <Box>{post.title}</Box>
          <Box>
            <MarkdownBox>{content}</MarkdownBox>
          </Box>
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

  // Determine the next and previous posts
  const index = posts.findIndex((s) => s.slug === postSlug);
  const categories = Object.keys(groupByCategory(posts));

  const prevPost = index <= 0 ? null : posts[index - 1];
  const nextPost = index >= posts.length - 1 ? null : posts[index + 1];

  return {
    props: {
      categories,
      content,
      frontMatter,
      prevPost,
      nextPost,
      post: posts[index],
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
