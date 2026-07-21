function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 text-white flex items-center px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-xl leading-9 text-gray-300">
          I'm <span className="font-semibold text-white">Sagnika</span>, a
          final-year Computer Science Engineering student and Global SAP-certified
          developer. I enjoy building modern web applications using React,
          Node.js, Express.js, MongoDB, Java, Spring Boot, and SAP ABAP.

          <br /><br />

          I'm passionate about solving real-world problems, creating clean user
          interfaces, and continuously learning new technologies. I'm currently
          preparing for software engineering and SAP opportunities.
        </p>
      </div>
    </section>
  );
}

export default About;