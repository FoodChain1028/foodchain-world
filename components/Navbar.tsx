import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const getLinkColor = (path: string) => {
    switch (path) {
      case "/":
        return "text-[#569cd6]";
      case "/resume":
        return "text-[#dcdcaa]";
      case "/posts":
        return "text-[#c586c0]";
      case "/projects":
        return "text-[#4fc1ff]";
      default:
        return "text-gray-400";
    }
  };

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/">
        <a className={`${getLinkColor("/")} hover:opacity-80 text-base`}>
          .home
        </a>
      </Link>
      <Link href="/resume">
        <a className={`${getLinkColor("/resume")} hover:opacity-80 text-base`}>
          .resume
        </a>
      </Link>
      <Link href="/posts">
        <a className={`${getLinkColor("/posts")} hover:opacity-80 text-base`}>
          .posts
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`${getLinkColor("/projects")} hover:opacity-80 text-base`}
        >
          .projects
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
