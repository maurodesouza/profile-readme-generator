import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import path from 'node:path';
import fs from 'node:fs';

import matter from 'gray-matter';

import { PostTemplate } from 'templates/post';
import { PostMetadata } from 'types';

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

  const paths = slugs.map(slug => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  try {
    const { slug } = params!;

    const filePath = path.join(POSTS_DIR, `${slug}.md`);
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
      props: {} as BlogPostProps,
    };
  }
};

export default BlogPost;
