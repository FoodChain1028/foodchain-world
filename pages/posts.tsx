import { useState } from 'react';
import Layout from '../components/Layout';
import LineNumbers from '../components/LineNumbers';
import PageHeader from '../components/PageHeader';

const posts = [
  {
    title: 'How to use DappChef to enhance Solidity Skill?',
    date: '2023-04-08',
    slug: 'Dapp-Introduction',
    excerpt: '大家好，我是來自 SWF Lab 的成員 -- FoodChain！這篇文主要想要分享我們 Lab 最近製作的一項專案，希望可以分享給更多想學習 solidity 的人們。',
    tags: ['blockchain', '中文']
  },
  {
    title: 'zkVaxCard',
    date: '2023-02-08',
    slug: 'zkVaxCard',
    excerpt: 'zkVaxCard 是一個可以幫助人們在「不揭露任何個人資訊如身分證字號、個人照片或健保卡卡號」之情況下「證明自己有接種過疫苗」之系統。',
    tags: ['zk', 'cryptography', '中文']
  },
  {
    title: 'Introduction of MACI',
    date: '2023-02-04',
    slug: 'MACI',
    excerpt: '在區塊鏈投票時，常會發生「共謀」的現象 (最常見的就是賄賂 )，而為了遏止此現象的發生，Barry White Hat 與 Ethereum 中其他成員建構了 MACI 這個 protocol...',
    tags: ['zk', 'cryptography', '中文']
  },
  {
    title: 'Cross-chain Transaction - HTLC',
    date: '2022-12-01',
    slug: 'Crosschain-HTLC',
    excerpt: '而此篇文章想要介紹一種在跨鏈交易中不須透過「第三方介入」的跨鏈方式 -- HTLC。',
    tags: ['blockchain', '中文']
  },
  {
    title: 'Cross-chain Transaction - XY protocol',
    date: '2022-11-19',
    slug: 'Crosschain-XY-Protocol',
    excerpt: '此系列文章想探討「何謂跨鏈交易」，並用一些產品幫助理解跨鏈交易是如何進行並如何實作。',
    tags: ['blockchain', '中文']
  },
  {
    title: '初探 Ethereum',
    date: '2022-07-26',
    slug: 'Ethereum-Basis',
    excerpt: '以太坊與比特幣的相關性非常多，本文會稍微提及以太坊之歷史並分享一些關於以太坊的基本運行方式。',
    tags: ['blockchain', '中文']
  }
];

const Posts = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // 獲取所有唯一的標籤
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  // 根據選擇的標籤過濾文章
  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  return (
    <Layout
      customMeta={{
        title: 'Posts - FoodChain',
      }}
    >
      <main className="min-h-screen bg-[#1e1e1e] text-white pt-20 font-mono pb-20">
        <div className="relative">
          <LineNumbers />
          <div className="pl-16 pr-4">
            <div className="max-w-4xl mx-auto">
              <PageHeader 
                title="Posts"
                description="Research & Outputs"
              />

              {/* 標籤過濾器 */}
              <div className="mb-8">
                <div className="text-gray-400 mb-2">// Filter by tag:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-3 py-1 rounded ${
                      selectedTag === null
                        ? 'bg-[#4ec9b0] text-black'
                        : 'bg-[#2d2d2d] text-[#4ec9b0] hover:bg-[#333333]'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 rounded ${
                        selectedTag === tag
                          ? 'bg-[#4ec9b0] text-black'
                          : 'bg-[#2d2d2d] text-[#4ec9b0] hover:bg-[#333333]'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="block bg-[#2d2d2d] rounded-lg p-6 hover:bg-[#333333] transition-colors"
                  >
                    <h2 className="text-xl text-[#4ec9b0] mb-2">{post.title}</h2>
                    <div className="text-gray-400 text-sm mb-4">{post.date}</div>
                    <p className="text-gray-400">/* {post.excerpt} */</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-sm px-2 py-1 rounded bg-[#1e1e1e] text-[#569cd6]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-[#c586c0] text-sm">Read More →</div>
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

export default Posts;
