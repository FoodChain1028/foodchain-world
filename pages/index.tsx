import React from "react";
import Layout from '../components/Layout';
import LineNumbers from '../components/LineNumbers';

const Home = () => {
  return (
    <Layout
      customMeta={{
        title: 'Home - FoodChain',
      }}
    >
      <main className="min-h-screen bg-[#1e1e1e] text-white pt-20 font-mono">
        <div className="relative">
          <LineNumbers />
          <div className="pl-16 pr-4">
            <div className="max-w-4xl mx-auto">
              <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="text-center mb-8">
                  <div className="text-gray-400 mb-8">// Hi, I'm Foodchain, A...</div>
                  <div className="text-4xl md:text-6xl mb-4">
                    <span className="text-white">{"{"}</span>
                    <span className="text-[#dcdcaa]">_zk engineer</span>
                    <span className="text-white">{"}"}</span>
                  </div>
                  <div className="mt-8">
                    <div className="animate-bounce">↓</div>
                  </div>
                </div>
              </div>

              <div className="space-y-12 pb-20">
                <section id="about" className="space-y-4 border-b border-[#2d2d2d] pb-4">
                  <h2 className="text-[#4ec9b0] text-2xl">About Me</h2>
                  <p className="text-gray-300">
                    Hi, I am <strong>Foodchain, aka Fu-Chuan Chung (鍾富全 in Mandarin), Jeff</strong> from Kaohsiung, Taiwan.
                  </p>
                  <p className="text-gray-300">
                    I am still a student pursuing my MSc degree of Software Development in University of Glasgow. 
                    I am interested in zero knowledge and am researching on several topic by myself 🛵. 
                    I am currently working on 2 projects: `social-tw` and `mopro`.
                  </p>
                </section>

                <section id="interests" className="space-y-4 border-b border-[#2d2d2d] pb-4">
                  <h2 className="text-[#4ec9b0] text-2xl">Interests</h2>
                  <p className="text-gray-300">
                    In my spare time, I love listening to jazz music and also play a little bit of piano 🎺.
                  </p>
                  <div className="bg-[#2d2d2d] p-4 rounded-lg">
                    <h3 className="text-[#dcdcaa] mb-4">Favorite Music:</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://www.youtube.com/watch?v=1_7xSwEC71A" 
                           className="text-[#9cdcfe] hover:text-[#4fc1ff]">
                          Jacob Collier - How Deep Is Your Love
                        </a>
                      </li>
                      <li>
                        <a href="https://youtu.be/nkrz36L75ZI" 
                           className="text-[#9cdcfe] hover:text-[#4fc1ff]">
                          September - Earth Wind & Fire cover by Fujii Kaze
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=IFUhPnqgWsM" 
                           className="text-[#9cdcfe] hover:text-[#4fc1ff]">
                          Dutch Neighbors Complain -「Just the two of us」
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="contact" className="space-y-4 border-b border-[#2d2d2d] pb-4">
                  <h2 className="text-[#4ec9b0] text-2xl">Contact</h2>
                  <div className="bg-[#2d2d2d] p-4 rounded-lg">
                    <p className="text-gray-300 mb-4">Feel free to contact me:</p>
                    <div className="space-x-4">
                      <a href="https://www.linkedin.com/in/fu-chuan-chung-177841232/" 
                         className="text-[#569cd6] hover:text-[#4fc1ff]"
                         target="_blank">
                        LinkedIn
                      </a>
                      <a href="https://github.com/FoodChain1028" 
                         className="text-[#569cd6] hover:text-[#4fc1ff]"
                         target="_blank">
                        GitHub
                      </a>
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

export default Home;
