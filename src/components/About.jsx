function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="space-y-6">

            <h3 className="text-3xl font-bold">
              SAP Certified Computer Science Engineer
            </h3>

            <p className="text-gray-300 leading-8">
              I am a Computer Science Engineering student with a CGPA of
              <span className="text-cyan-400 font-bold"> 8.71 </span>
              and a strong passion for Full Stack Development, MERN Stack,
              Java, Spring Boot, SAP ABAP, and modern web technologies.
            </p>

            <p className="text-gray-300 leading-8">
              I enjoy building responsive web applications, solving
              real-world problems, and continuously learning new
              technologies to improve my development skills.
            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-2xl font-bold">8.71</h3>
              <p>CGPA</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-2xl font-bold">3+</h3>
              <p>Projects</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-2xl font-bold">SAP</h3>
              <p>Certified</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-2xl font-bold">2026</h3>
              <p>Graduate</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;