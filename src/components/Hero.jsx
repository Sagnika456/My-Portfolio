import profile from "../assets/images/portfolio.png.png";

function Hero() {
  return (
    <section 
     id="home"
    className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>
          <p className="text-cyan-400 text-xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold">
            Sagnika 👋
          </h1>

          <h2 className="text-3xl mt-4 text-gray-300">
            Full Stack Developer | SAP Certified
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Passionate about React, MERN Stack, Spring Boot, SAP ABAP,
            and building modern web applications.
          </p>

          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg"
>
  Download Resume
</a>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Sagnika"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;