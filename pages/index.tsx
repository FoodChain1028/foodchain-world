import { GetStaticProps } from "next";
import React from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Divider from "./components/Divider";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Header />
      <div className="flex justify-center items-center">
        <h1>About Me</h1>
      </div>
      <div className="flex justify-center items-center">
        <p>Foodchain && Blockchain.</p>
      </div>
      <div className="flex justify-center items-center flex-1">
        <div className="w-64 h-64">
          <img
            src="https://i.imgur.com/Z99nTyQ.jpg"
            alt="foodchain"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <br />
      <p>
        Hi, I am{" "}
        <strong>
          <i>Foodchain, aka Fu-Chuan Chung (鍾富全 in Mandarin), Jeff</i>
        </strong>{" "}
        from Kaohsiung, Taiwan.
      </p>

      <p>
        I am still a student pursuing my MSc degree of Software Development in University of Glasgow. I am interested in zero knowledge and am researching on several topic by myself 🛵. I am currently working on 2 projects: `social-tw` and `mopro`.
      </p>

      <p>
        In my spare time, I love listening to jazz music and also play a little
        bit of piano 🎺.
      </p>
      <p>Here's a list of my favorite music:</p>
      <ul className="list-disc pl-4 my-6">
        <li>
          <a
            href="https://www.youtube.com/watch?v=1_7xSwEC71A"
            className="text-gray-900 dark:text-white"
          >
            Jacob Collier - How Deep Is Your Love (Live in Fort Lauderdale)
          </a>
        </li>
        <li>
          <a
            href="https://youtu.be/nkrz36L75ZI"
            className="text-gray-900 dark:text-white"
          >
            September - Earth Wind & Fire cover by Fujii Kaze
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=IFUhPnqgWsM"
            className="text-gray-900 dark:text-white"
          >
            20150425 [Dutch] Neighbors Complain「Just the two of us」
          </a>
        </li>
      </ul>

      <Divider />
      
      <h2 className="dark:text-yellow-200">Contact</h2>
      <br />
      <p>
        <b> Feel free to contact me with these links:</b>
      </p>

      <ul className="list-disc pl-4 my-6">
        <li>
          <a
            href="https://www.linkedin.com/in/fu-chuan-chung-177841232/"
            className="text-gray-900 dark:text-white"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FoodChain1028"
            className="text-gray-900 dark:text-white"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@food-chain"
            className="text-gray-900 dark:text-white"
            target="_blank"
          >
            Medium
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/FC1028tw"
            className="text-gray-900 dark:text-white"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>Email: chungfuchuan1028@gmail.com</li>
      </ul>

      <Divider />

      {/*  Education */}
      <h2 className="dark:text-yellow-200">Education</h2>
      <br />
      <b> NTU BS PPM (2019 ~ 2023) </b>
      <b> Lectures: </b>
      <ul className="list-disc pl-4 my-6">
        <li>CSIE - Blockchain and Data Analysis</li>
        <li>EE - Cryptography</li>
        <li>EE - Operating System</li>
        <li>EE - Web Programming</li>
        <li>IM - Programming Design</li>
      </ul>
      <b> UoG MSc IT (2023 ~ 2024) </b>
      <ul className="list-disc pl-4 my-6">
        <li> COMSCI - Programming </li>
        <li> COMSCI - Advanced Programming </li>
        <li> COMSCI - Data Structures & Alogrithms </li>
        <li> COMSCI - Internet Technology </li>
        <li> COMSCI - Cryptography Development </li>
      </ul>

      <b> MOOC </b>
      <ul className="list-disc pl-4 my-6">
        <li> <a href="https://zk-learning.org/">ZKP MOOC</a></li>
      </ul>

      <Divider />
      {/* Experiences */}
      <h2 className="dark:text-yellow-200">Experience</h2>

      <ul className="list-disc pl-4 my-6">
        <li>
          2024 Jan. ~ 2023 Feb. -- Grantee{" "}
          <i>@PSE Mopro</i>
        </li>
        <li>
          2023 Jun. ~ 2023 Sep. -- Cohort{" "}
          <i>@PSE Summer Contribution</i>
        </li>
        <li>
          2023 Jun. ~ Present -- Contributor in Social-tw{" "}
          <i>@Taiwan Community</i>
        </li>
        <li>
          2023 Feb. ~ 2023 May. -- Software Engineer Intern{" "}
          <i>@Create Intelligens Inc.</i>
        </li>
        <li>
          2023 Jan. ~ 2023 Apr. -- DappChef-Smart Contract Cook <i>@SWFLab</i>
        </li>
      </ul>

      <Divider />
      {/* Awards */}
      <h2 className="dark:text-yellow-200">Awards</h2>
      <ul className="list-disc pl-4 my-6">
        <li>
          2022 Dec. -- Roadmap to DApp Developer{" "}
          <i>@IT-30-day challenge contest</i>
        </li>
        <li>
          2022 Oct. -- LW3DAO Voting System{" "}
          <i>@Hacktomount 3.0 Hackathon</i>
        </li>
      </ul>

      <Divider />
      <Top />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title"]);

  return {
    props: { posts },
  };
};

export default Index;
