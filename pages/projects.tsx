import React from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Layout from "../components/Layout";
import Project from "./components/Project";
import { id } from "date-fns/locale";

export const Projects = (): JSX.Element => {
  const list = [
    {
      title: "DappChef",
      content: `This is solidity-version leetcode built by SWF Lab. My job was mainly focus on construction and testing of the Reward NFT Contract and problem design in the system. In Addition, I also designed the dashboard which enable instructors to check out students' scores.`,
      date: "2023 Apr.",
      skills: ["Typescript", "Solidity", "Hardhat", "React"],
      link: "https://dappchef.com",
    },
    {
      title: "Discord GPT Bot",
      content:
        "This Chat bot is a product used by Create Intellgens Inc. in their Discord. There are two main function in this project, which are getting answer directly from database and chatting with Chatgpt with a limited reply.",
      date: "2023 Mar.",
      skills: ["Python", "Jieba", "Postgres", "Discord.py"],
      link: "https://github.com/FoodChain1028/discord-bot",
    },
    {
      title: "zkVaxCard",
      content: `This project is based on a ZKProof protocol -- Semaphore. Users are able to prove their vax record without revealing their own information, which extremely protects people's privacy.`,
      date: "2023 Dec.",
      skills: ["Javascript", "Solidity", "Semaphore", "ZKSNARK", "React"],
      link: "https://github.com/FoodChain1028/zkVaxCard",
    },
  ];
  return (
    <Layout>
      <Header />
      <div className="flex justify-center items-center">
        <h1>Projects</h1>
      </div>
      {list.map((project: any, i: number) => {
        const id = i + 1;
        return <Project project={project} key={id} />;
      })}
      <Top />
    </Layout>
  );
};

export default Projects;
