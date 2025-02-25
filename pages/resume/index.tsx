import React from "react";
import Layout from "../../components/Layout";
import LineNumbers from '../../components/LineNumbers';

const Resume = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Resume - FoodChain',
      }}
    >
      <main className="min-h-screen bg-[#1e1e1e] text-white pt-20 font-mono pb-20">
        <div className="relative">
          <LineNumbers />
          <div className="pl-16 pr-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl text-[#dcdcaa] mb-4">Resume</h1>
                <div className="text-gray-500 mt-2">/* Experience & Education */</div>
              </div>

              <div className="space-y-8">
                <section className="bg-[#2d2d2d] rounded-lg p-6">
                  <h2 className="text-xl text-[#4ec9b0] mb-4">Experience</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#569cd6]">Software Engineer Intern @ Create Intellgens Inc.</h3>
                      <div className="text-gray-400 text-sm mb-2">2023.02 - 2023.08</div>
                      <ul className="list-disc pl-5 text-gray-400">
                        <li>Developed and maintained web applications using React and Node.js</li>
                        <li>Implemented Discord bot for customer service automation</li>
                        <li>Built server monitoring system with real-time alerts</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-[#2d2d2d] rounded-lg p-6">
                  <h2 className="text-xl text-[#4ec9b0] mb-4">Education</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#569cd6]">MSc Software Development @ University of Glasgow</h3>
                      <div className="text-gray-400 text-sm mb-2">2023 - Present</div>
                      <p className="text-gray-400">Focusing on advanced software development practices and research in zero-knowledge proofs.</p>
                    </div>
                    <div>
                      <h3 className="text-[#569cd6]">BSc Information Management @ National Central University</h3>
                      <div className="text-gray-400 text-sm mb-2">2019 - 2023</div>
                      <p className="text-gray-400">Studied information systems, database management, and web development.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-[#2d2d2d] rounded-lg p-6">
                  <h2 className="text-xl text-[#4ec9b0] mb-4">Skills</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[#569cd6] mb-2">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {['TypeScript', 'JavaScript', 'Python', 'Solidity', 'Rust'].map((skill) => (
                          <span key={skill} className="text-sm px-2 py-1 rounded bg-[#1e1e1e] text-[#9cdcfe]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#569cd6] mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'Next.js', 'Hardhat', 'circom'].map((tech) => (
                          <span key={tech} className="text-sm px-2 py-1 rounded bg-[#1e1e1e] text-[#9cdcfe]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Resume;
