import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Education
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition duration-300">

          <div className="flex items-center gap-5">

            <div className="bg-cyan-500 p-4 rounded-full text-3xl">
              <FaGraduationCap />
            </div>

            <div>

              <h3 className="text-3xl font-bold">
                Bachelor of Technology
              </h3>

              <p className="text-cyan-400 text-xl mt-2">
                Computer Science & Engineering
              </p>

              <p className="text-gray-400 mt-2">
                Centurion University of Technology and Management
              </p>

              <p className="text-gray-400">
                2022 - 2026
              </p>

            </div>

          </div>

          <hr className="border-slate-700 my-8" />

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <h4 className="text-cyan-400 text-2xl font-bold">
                8.71
              </h4>
              <p>Current CGPA</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <h4 className="text-cyan-400 text-2xl font-bold">
                SAP
              </h4>
              <p>Certified</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <h4 className="text-cyan-400 text-2xl font-bold">
                2026
              </h4>
              <p>Expected Graduation</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;