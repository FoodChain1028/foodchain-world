import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-yellow-200 pr-6 py-4">Home</a>
      </Link>
      <Link href="/projects">
        <a className="text-gray-900 dark:text-yellow-200 px-6 py-4">Projects</a>
      </Link>
      <Link href="/posts">
        <a className="text-gray-900 dark:text-yellow-200 px-6 py-4">Posts</a>
      </Link>
    </nav>
  );
};

export default Navigation;
