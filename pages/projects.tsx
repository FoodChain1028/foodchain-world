import React from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Layout from "../components/Layout";
import Project from "./components/Project";
import { id } from "date-fns/locale";

export const Projects = (): JSX.Element => {
  const list = [
    {
      title: "Privacy Preserved SBT Voting System",
      content: "This system integrates Soul-Bound Token and zk-Voting, aiming to build a voting system with privacy and transparency.",
      date: "2023 May",
      skills: ["Javascript", "Solidity", "circom", "snarkjs", "React"],
      link: "https://github.com/FoodChain1028/SBT-based-zkVoting-System",
    },
    {
      title: "Server Listening System",
      content:
        "It is a system regularly listening the error event from the main server. If there is any error happens in main server, it would send alarm message to the manager through line notify and email.",
      date: "2023 May",
      skills: ["Javascript", "MUI", "express", "SMTP", "line-notify"],
      link: "(private)",
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
      content: "This project is based on a ZKProof protocol -- Semaphore. Users are able to prove their vax record without revealing their own information, which extremely protects people's privacy.",
      date: "2022 Dec.",
      skills: ["Javascript", "Solidity", "Semaphore", "ZKSNARK", "React"],
      link: "https://github.com/FoodChain1028/zkVaxCard",
    },
    {
      title: "DappChef",
      content: "This is solidity-version leetcode built by SWF Lab. My job was mainly focus on construction and testing of the Reward NFT Contract and problem design in the system. In Addition, I also designed the dashboard which enable instructors to check out students' scores.",
      date: "2023 Apr.",
      skills: ["Typescript", "Solidity", "Hardhat", "React"],
      link: "https://dappchef.com",
    },
  ];
  return (
    <Layout>
      <Header />
      <div className="flex justify-center items-center">
        <h1>Projects</h1>
      </div>
      <div className="flex justify-center items-center">
        <p>Practice makes perfect.</p>
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
