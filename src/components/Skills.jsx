function Skills() {

  const skills = [
    { name: "React", level: "90%" },
    { name: "Java", level: "85%" },
    { name: "Spring Boot", level: "80%" },
    { name: "Node.js", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "SAP ABAP", level: "90%" },
    { name: "MySQL", level: "85%" },
    { name: "Git & GitHub", level: "85%" },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-8"
    >

      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        Technical Skills
      </h2>

      <div className="max-w-4xl mx-auto">

        {skills.map((skill, index) => (

          <div key={index} className="mb-8">

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                {skill.name}
              </span>

              <span className="text-cyan-400">
                {skill.level}
              </span>

            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">

              <div
                className="bg-cyan-400 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;