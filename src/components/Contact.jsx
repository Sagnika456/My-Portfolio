import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 text-lg mb-12">
          I'm open to internships, full-time opportunities, and exciting projects.
        </p>

        <div className="space-y-6">

          <div className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <span>your-email@gmail.com</span>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaLinkedin className="text-cyan-400 text-2xl" />
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaGithub className="text-cyan-400 text-2xl" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              GitHub Profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;