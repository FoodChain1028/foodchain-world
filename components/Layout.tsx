import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./Head";
import Navigation from "./Navigation";
import ThemeSwitch from "./ThemeSwitch";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = "https:foochain1028.eth.xyz";

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8  flex justify-center items-center">
        <div className="max-w-5xl px-8 mx-auto">
          <i>
            {" "}
            Shout out to author of this template -{" "}
            <a
              className="text-gray-900 dark:text-white"
              href="https://twitter.com/hunterhchang"
            >
              Hunter Chang
            </a>
          </i>
        </div>
      </footer>
    </>
  );
};

export default Layout;
