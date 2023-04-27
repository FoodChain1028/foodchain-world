import React from "react";
import Link from "next/link";
import Divider from "./components/Divider";
import Header from "./components/Header";
import Layout from "../components/Layout";
import Top from "./components/Top";
import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

type ProjectsProps = {
  posts: PostType[];
};

export const Posts = ({ posts }: ProjectsProps): JSX.Element => {
  return (
    <Layout>
      <Header />
      <div className="flex justify-center items-center">
        <h1>Posts</h1>
      </div>
      {posts.map((post) => (
        <>
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-900 dark:text-yellow-200 dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
          <Divider />
        </>
      ))}

      <Top />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title"]);

  return {
    props: { posts },
  };
};

export default Posts;
