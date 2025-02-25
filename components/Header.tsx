const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#1e1e1e] p-4 z-50 border-b border-[#2d2d2d] font-mono">
      <div className="flex items-center space-x-6">
        <div className="text-gray-400 text-base">// foodchain</div>
        <div className="text-[#4ec9b0] text-base">.dev</div>
        <a href="/" className="text-[#569cd6] hover:opacity-80 text-base">.home</a>
        <a href="/resume" className="text-[#dcdcaa] hover:opacity-80 text-base">.resume</a>
        <a href="/posts" className="text-[#c586c0] hover:opacity-80 text-base">.posts</a>
        <a href="/projects" className="text-[#4fc1ff] hover:opacity-80 text-base">.projects</a>
      </div>
    </nav>
  );
};

export default Header;
