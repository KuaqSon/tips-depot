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
      href: `${slugify(category)}/${slug}`,
      title: frontMatter.title,
    };
  });

export const groupByCategory = (snippets: IPost[]) =>
  snippets.reduce(
    (acc: Record<string, IPost[]>, item: IPost) => ((acc[item.category] = [...(acc[item.category] || []), item]), acc),
    {}
  );

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const slugify = (text: string) => text.toLowerCase().split(' ').join('-');

export const unSlugify = (text: string) =>
  text
    .split('-')
    .map((s) => capitalize(s))
    .join(' ');

export const shuffle = (array: Array<unknown>) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
