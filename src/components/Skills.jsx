import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiSap,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-400" /> },
    { name: "Java", icon: <FaJava size={45} className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={45} className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql size={45} className="text-blue-500" /> },
    { name: "SAP ABAP", icon: <SiSap size={45} className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt size={45} className="text-orange-500" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white py-20 px-8"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition duration-300 shadow-lg"
          >
            {skill.icon}
            <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;