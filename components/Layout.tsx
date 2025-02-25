import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./Head";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = "https:foochain1028.eth.xyz";

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      {children}
      <footer className="fixed bottom-0 w-full bg-[#1e1e1e] border-t border-[#2d2d2d] py-2">
        <div className="max-w-5xl px-8 mx-auto text-center text-gray-400 text-sm font-mono">
          <span className="text-gray-500">// </span>
          <a href="https://x.com/@zk_foodchain" target="_blank" rel="noopener noreferrer" className="text-[#4ec9b0] hover:opacity-80">@zk_foodchain</a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
