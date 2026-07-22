import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "SAP ABAP Certification",
      issuer: "SAP",
      year: "2026",
    },
    {
      title: "SAP Fiori Certification",
      issuer: "SAP",
      year: "2026",
    },
    {
      title: "Data Analytics Internship",
      issuer: "InfoTact Solutions",
      year: "2026",
    },
    {
      title: "Frontend Development Internship",
      issuer: "CodeAlpha",
      year: "2025",
    },
    {
      title: "NxtWave Build Your Own GenAI Workshop",
      issuer: "NxtWave",
      year: "2025",
    },
    {
      title: "Odisha Symposium Participation",
      issuer: "SOA University",
      year: "2025",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl mb-6">
                <FaCertificate />
              </div>

              <h3 className="text-2xl font-bold">
                {cert.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {cert.issuer}
              </p>

              <p className="text-cyan-400 mt-2">
                {cert.year}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;