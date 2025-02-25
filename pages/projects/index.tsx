import Layout from '../../components/Layout';

const LineNumbers = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-12 flex flex-col items-end pr-3 text-gray-500 select-none font-mono text-sm pt-20 bg-[#1e1e1e] border-r border-[#2d2d2d] overflow-y-auto">
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i + 1} className="leading-6">
          {i + 1}
        </div>
      ))}
    </div>
  );
};

const projects = [
  {
    title: 'zkVaxCard',
    description: 'zkVaxCard 是一個以幫助人們在不透露「不想要的個資」就能夠分享完整的個人資料，個人資料只有成功驗證卡片後才能存取，之後設定下「提供自己已完整提供資料」之系統，以 React.js 為前端開發的框架，json-server 在為一個非常簡單的後端資料庫，並以 Semaphore protocol 作為其零知識證明等知識理論技術。',
    link: 'https://github.com/FoodChain1028/zkVaxCard',
    tags: ['React', 'ZK', 'Semaphore', 'json-server'],
  },
  {
    title: 'DappChef',
    description: '大家好，我是來自 SWF Lab 的成員 - FoodChain！這篇文章主要是分享我在 Lab 裡以 DappChef 為主題所做的一項專案，希望可以分享給更多想要學習 solidity 的入門。',
    link: 'https://github.com/FoodChain1028/DappChef',
    tags: ['Solidity', 'Hardhat', 'Ethereum'],
  },
];

const Projects = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - FoodChain',
      }}
    >
      <nav className="fixed top-0 w-full bg-[#1e1e1e] p-4 z-50 border-b border-[#2d2d2d] font-mono">
        <div className="flex items-center space-x-6 text-sm">
          <div className="text-gray-400">// foodchain</div>
          <div className="text-[#4ec9b0]">.dev</div>
          <a href="/" className="text-[#569cd6] hover:opacity-80">._home</a>
          <a href="/resume" className="text-[#dcdcaa] hover:opacity-80">._resume</a>
          <a href="/posts" className="text-[#c586c0] hover:opacity-80">._posts</a>
          <a href="/projects" className="text-[#4fc1ff] hover:opacity-80">._projects</a>
        </div>
      </nav>

      <main className="min-h-screen bg-[#1e1e1e] text-white pt-20 font-mono pb-20">
        <div className="relative">
          <LineNumbers />
          <div className="pl-16 pr-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl text-[#dcdcaa] mb-4">FOODCHAIN 👻</h1>
                <div className="text-gray-400 text-lg">Projects</div>
                <div className="text-gray-500 mt-2">/* Some of my featured projects */</div>
              </div>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#2d2d2d] rounded-lg p-6 hover:bg-[#333333] transition-colors"
                  >
                    <h2 className="text-xl text-[#4ec9b0] mb-2">{project.title}</h2>
                    <p className="text-gray-400 mb-4">/* {project.description} */</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-sm px-2 py-1 rounded bg-[#1e1e1e] text-[#569cd6]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-[#c586c0] text-sm">View Project →</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
