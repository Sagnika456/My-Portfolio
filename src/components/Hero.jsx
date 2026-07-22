import profile from "../assets/images/portfolio.png.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>
          <p className="text-cyan-400 text-xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Sagnika 👋
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "SAP Certified",
              2000,
              "Java Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl font-semibold text-cyan-400"
          />

          <p className="mt-6 text-lg text-gray-300 leading-8">
            SAP Certified Computer Science Engineering student passionate
            about building scalable web applications using React, MERN Stack,
            Java, Spring Boot, and SAP technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105"
  >
    📄 Download Resume
  </a>

  <a
    href="#projects"
    className="border border-cyan-400 px-6 py-3 rounded-xl font-semibold transition duration-300 hover:bg-cyan-500 hover:scale-105"
  >
    🚀 View Projects
  </a>

</div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/Sagnika456"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Sagnika"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.7)] hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;