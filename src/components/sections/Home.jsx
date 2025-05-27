import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Astha Singh
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>


          <div className="flex flex-wrap justify-center gap-4 mt-6">
    {/* GitHub */}
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
    >
      <FaGithub className="w-12 h-12 text-2xl rounded-full text-blue-600 hover:text-blue-800" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
    >
      <img
        src="/link.png"
        alt="Codeforces"
        className="w-12 h-12 rounded-full object-contain"
      />
      {/* <FaLinkedin className="w-12 h-12 text-2xl text-blue-600 hover:text-blue-800" /> */}
    </a>

    {/* LeetCode */}
    <a
      href="https://leetcode.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 hover:bg-yellow-200 transition"
    >
      <SiLeetcode className="text-2xl text-yellow-500 hover:text-yellow-600" />
    </a>

    {/* GeeksforGeeks */}
    <a
      href="https://auth.geeksforgeeks.org/user/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition"
    >
      <SiGeeksforgeeks className="text-2xl text-green-600 hover:text-green-800" />
    </a>

    {/* Codeforces */}
    <a
      href="https://codeforces.com/profile/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
    >
      <img
        src="/codeforces.png"
        alt="Codeforces"
        className="w-6 h-6 object-contain"
      />
    </a>

    {/* CodeChef */}
    <a
      href="https://www.codechef.com/users/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 transition"
    >
      <img
        src="/codechef.jpg"
        alt="CodeChef"
        className="w-12 h-12 object-contain rounded-full"
      />
    </a>
  </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};