import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const BlogContainer = styled.div`
  padding: 10px 50px;
  div {
    background: #dbdbdb;
    margin: 20px 0;
    padding: 20px;
    border-radius: 4px;
    h4 {
      text-transform: uppercase;
    }
  }
`;

export default function Blog({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogContainer>
        {data.map((blog: Post) => (
          <div key={blog.id}>
            <h4>
              <Link href={`/blog/${encodeURIComponent(blog.id)}`}>
                {blog.title}
              </Link>
            </h4>
            <p>{blog.body}</p>
          </div>
        ))}
      </BlogContainer>
    </>
  );
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: number;
}

const API_URL: string = "https://jsonplaceholder.typicode.com/posts";

export const getStaticProps: GetStaticProps = async () => {
  const JsonData = await fetch(API_URL);
  const data: Post[] = await JsonData.json();
  return {
    props: { data },
    revalidate: 600,
  };
};
