import React from "react";
import Layout from '../components/Layout';
import LineNumbers from '../components/LineNumbers';
import PageHeader from '../components/PageHeader';

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
  {
    title: 'Privacy Preserved SBT Voting System',
    description: 'This system integrates Soul-Bound Token and zk-Voting, aiming to build a voting system with privacy and transparency.',
    link: 'https://github.com/FoodChain1028/SBT-based-zkVoting-System',
    tags: ['Javascript', 'Solidity', 'circom', 'snarkjs', 'React'],
  },
  {
    title: 'Server Listening System',
    description: 'It is a system regularly listening the error event from the main server. If there is any error happens in main server, it would send alarm message to the manager through line notify and email.',
    link: '(private)',
    tags: ['Javascript', 'MUI', 'express', 'SMTP', 'line-notify'],
  },
  {
    title: 'Discord GPT Bot',
    description: 'This Chat bot is a product used by Create Intellgens Inc. in their Discord. There are two main function in this project, which are getting answer directly from database and chatting with Chatgpt with a limited reply.',
    link: 'https://github.com/FoodChain1028/discord-bot',
    tags: ['Python', 'Jieba', 'Postgres', 'Discord.py'],
  },
];

const Projects = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - FoodChain',
      }}
    >
      <main className="min-h-screen bg-[#1e1e1e] text-white pt-20 font-mono pb-20">
        <div className="relative">
          <LineNumbers />
          <div className="pl-16 pr-4">
            <div className="max-w-4xl mx-auto">
              <PageHeader 
                title="Projects"
                description="Side Projects & Contributions"
              />

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
                    <h2 className="text-2xl text-[#4ec9b0] mb-4">{project.title}</h2>
                    <p className="text-gray-400 mb-4">
                      /* {project.description} */
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-sm px-2 py-1 rounded bg-[#1e1e1e] text-[#569cd6]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#c586c0] hover:underline">
                      View on GitHub →
                    </a>
                  </div>
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
