import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  h5 {
    flex: 1;
    padding-left: 50px;
    line-height: 32px;

    @media (max-width: 800px) {
      padding: 5px;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blog + Typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection>
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={400}
          height={300}
        />
        <h5>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo
        </h5>
      </HeroSection>
    </>
  );
}
