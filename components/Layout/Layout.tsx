import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const HomeHeader = styled.h3`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavBar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    li {
      padding: 5px 10px;
      a {
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HomeHeader>
        Blog Website Using NextJs + Typescript + Styled Components
      </HomeHeader>
      <NavBar>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </NavBar>
      {children}
    </>
  );
};

export default Layout;
