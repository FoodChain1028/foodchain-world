import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#1e1e1e] p-4 z-50 border-b border-[#2d2d2d] font-mono">
      <div className="flex items-center space-x-6">
        <div className="text-gray-400 text-base">// foodchain</div>
        <div className="text-[#4ec9b0] text-base">.dev</div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
