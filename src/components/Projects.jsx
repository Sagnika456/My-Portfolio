import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500 transition"
                >
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;