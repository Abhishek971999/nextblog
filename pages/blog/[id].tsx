import Head from "next/head";
import styled from "styled-components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const BlogContainer = styled.div`
  padding: 10px 50px;
  @media (max-width: 800px) {
    padding: 5px;
  }
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

export default function SingleBlog({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!data) {
    return (
      <BlogContainer>
        <div>
          <h4>Loading Post !</h4>
        </div>
      </BlogContainer>
    );
  }
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogContainer>
        <div>
          <h4>{data?.title}</h4>
          <p>{data?.body}</p>
        </div>
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

const API_URL: string = "https://jsonplaceholder.typicode.com/posts/";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const JsonData = await fetch(API_URL + ctx.params.id);
  const data: Post = await JsonData.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};
