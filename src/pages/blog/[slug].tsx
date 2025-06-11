import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';

import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

import { PostTemplate } from 'templates/post';
import { PostMetadata } from 'types';

import { CONSTANTS } from '@constants';

const POSTS_DIR = path.join(process.cwd(), 'posts');

type BlogPostProps = {
  content: string;
  metadata: PostMetadata;
};

const BlogPost = ({ metadata, ...rest }: BlogPostProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <PostTemplate {...rest} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = fs.readdirSync(POSTS_DIR);

  const paths = slugs.reduce(
    (acc, slug) => {
      const paths = CONSTANTS.LOCALES.map(locale => ({
        params: { slug: slug.replace(/\.md$/, '') },
        locale,
      }));

      return [...acc, ...paths];
    },
    [] as GetStaticPathsResult['paths']
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
  locale = 'en',
}) => {
  const { slug } = params!;

  if (!slug) {
    return {
      notFound: true,
      props: {} as BlogPostProps,
    };
  }

  try {
    const filePath = path.join(POSTS_DIR, slug as string, `${locale}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { content, data } = matter(fileContent);

    return {
      props: {
        content,
        metadata: data as PostMetadata,
      },
    };
  } catch (err) {
    return {
      notFound: true,
      props: {} as BlogPostProps,
    };
  }
};

export default BlogPost;
