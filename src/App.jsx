import biodigesterImg from "./assets/Biogas.jpg";
import fpgaImg from "./assets/FPGA_Matmul.png";
import batteryImg from "./assets/SSLMBResearch.jpg";
import headshotImg from "./assets/headshot.jpg";

function App() {
  const projects = [
    {
      title: "Smart Biodigester",
      image: biodigesterImg,
      description:
        "ESP32-based IoT biodigester integrating methane, pH, humidity, and temperature sensing with intelligent energy optimization.",
      tech: ["ESP32", "IoT", "PCB Design", "Sensors"],
    },

    {
      title: "FPGA Matrix Accelerator",
      image: fpgaImg,
      description:
        "32x32 FPGA matrix multiplication accelerator optimized using pipelining and loop unrolling for AI hardware acceleration.",
      tech: ["FPGA", "Verilog", "HLS", "AI Hardware"],
    },

    {
      title: "Solid-State Battery Research",
      image: batteryImg,
      description:
        "Battery management system interface modeling and impedance spectroscopy analysis for SSLMB systems.",
      tech: ["MATLAB", "Simulink", "Battery Systems"],
    },
  ];

  return (
    <div className="relative text-white overflow-x-hidden bg-[#050816]">
      
     
    {/* ANIMATED BACKGROUND */}
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* BLUE GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/30 rounded-full blur-[140px] animate-pulse"></div>

      {/* PURPLE GLOW */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[140px] animate-pulse"></div>

      {/* CENTER GLOW */}
      <div className="absolute top-[30%] left-[35%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

    </div>



      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        
        {/* HEADSHOT */}
        <img
          src={headshotImg}
          alt="Yvan Bota"
          className="w-44 h-44 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] mb-8"
        />

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Yvan Bota
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
          Electrical Engineering Student specializing in Embedded Systems,
          FPGA Acceleration, Intelligent Energy Systems, PCB Design,
          and AI Hardware Architectures.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <a
            href="https://github.com/yvanembedded-cmd"
            target="_blank"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/maestro-yvan"
            target="_blank"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      
    {/* PROJECTS SECTION */}
    <section className="py-24 overflow-hidden">

      <h2 className="text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="relative overflow-hidden">

        {/* SLIDER */}
        <div className="slider-track">

          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="project-card"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* LEFT FADE */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

      </div>

    </section>  



      {/* CONTACT */}
      <section className="py-24 text-center">
        
        <h2 className="text-5xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-300 text-xl">
          maestroyvan1@gmail.com
        </p>

      </section>
    </div>
  );
}

export default App;