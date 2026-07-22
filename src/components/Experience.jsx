import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "InfoTact Solutions",
      duration: "Jan 2026 – Mar 2026",
      description:
        "Worked on data analysis, reporting, dashboards, and business insights using modern analytics tools.",
    },
    {
      title: "Frontend Development Intern",
      company: "CodeAlpha",
      duration: "2025",
      description:
        "Developed responsive web applications using HTML, CSS, JavaScript, and React while collaborating on real-world projects.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Experience
        </h2>

        <div className="relative border-l-4 border-cyan-400 ml-6">

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8">

              <div className="absolute -left-5 bg-cyan-500 p-3 rounded-full">
                <FaBriefcase />
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.title}
                </h3>

                <p className="text-lg mt-2">
                  {exp.company}
                </p>

                <p className="text-gray-400 mt-1">
                  {exp.duration}
                </p>

                <p className="mt-4 text-gray-300 leading-7">
                  {exp.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;