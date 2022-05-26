import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { CATEGORIES_DIR } from 'utils/constants';
import { IPost } from 'utils/types';

export const loadSnippets = () => {
  const folders = fs.readdirSync(path.join(CATEGORIES_DIR));
  const posts: IPost[] = [];

  folders.forEach((folder) => {
    loadSnippetsOfCategory(folder).forEach((s) => posts.push(s));
  });

  return posts;
};

export const loadSnippetsOfCategory = (category: string): IPost[] =>
  fs.readdirSync(path.join(CATEGORIES_DIR, category)).map((file) => {
    const markdown = fs.readFileSync(path.join(CATEGORIES_DIR, category, file), 'utf-8');
    const { data: frontMatter } = matter(markdown);
    const slug = file.replace('.md', '');
    return {
      slug,
      category: frontMatter.category,
      href: `${slugifyCategory(frontMatter.category)}/${slug}`,
      title: frontMatter.title,
    };
  });

export const groupByCategory = (snippets: IPost[]) =>
  snippets.reduce(
    (acc: Record<string, IPost[]>, item: IPost) => ((acc[item.category] = [...(acc[item.category] || []), item]), acc),
    {}
  );

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const slugifyCategory = (category: string) => category.toLowerCase().split(' ').join('-');

export const unslugifyCategory = (category: string) =>
  category
    .split('-')
    .map((s) => capitalize(s))
    .join(' ');
