import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Layout, { WEBSITE_HOST_URL } from "../../components/Layout";
import { MetaProps } from "../../types/layout";
import { PostType } from "../../types/post";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const LineNumbers = () => {
  const numbers = Array.from({ length: 32 }, (_, i) => i + 1);
  return (
    <div className="fixed left-0 top-0 bottom-0 w-12 flex flex-col items-end pr-3 text-gray-500 select-none font-mono text-sm pt-20 bg-[#1e1e1e] border-r border-[#2d2d2d]">
      {numbers.map((num) => (
        <div key={num} className="leading-6">
          {num}
        </div>
      ))}
    </div>
  );
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - FoodChain`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: "article",
  };
  
  return (
    <Layout customMeta={customMeta}>
      <main className="min-h-screen bg-[#1e1e1e] text-white pt-20 font-mono">
        <div className="relative">
          <LineNumbers />
          <div className="pl-16 pr-4">
            <div className="max-w-4xl mx-auto">
              <article>
                <div className="mb-8">
                  <div className="text-gray-400 mb-2">// {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</div>
                  <h1 className="text-3xl text-[#dcdcaa] mb-4">{frontMatter.title}</h1>
                  {frontMatter.description && (
                    <p className="text-gray-400 text-lg">/* {frontMatter.description} */</p>
                  )}
                </div>
                
                <div className="prose prose-lg dark:prose-dark max-w-none">
                  <div className="bg-[#2d2d2d] rounded-lg p-6 markdown-content">
                    <MDXRemote {...source} components={components} />
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-[#2d2d2d]">
                  <Link href="/posts">
                    <a className="text-[#569cd6] hover:text-[#4fc1ff]">← Back to Posts</a>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkGfm]],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [rehypePrism, { ignoreMissing: true }],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
