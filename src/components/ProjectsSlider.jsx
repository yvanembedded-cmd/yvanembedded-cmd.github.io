import { Link } from "react-router-dom";

const projects = [
  {
    title: "Smart Biodigester",
    image: "/biodigester.jpg",
    route: "/projects/biodigester",
    tech: ["ESP32", "IoT", "PCB"]
  },

  {
    title: "FPGA Matrix Accelerator",
    image: "/fpga.jpg",
    route: "/projects/fpga",
    tech: ["Verilog", "FPGA", "AI"]
  },

  {
    title: "Automatic Transfer Switch",
    image: "/ats.jpg",
    route: "/projects/ats",
    tech: ["ESP32", "Power Electronics"]
  },

  {
    title: "Portable Emissions Tracer",
    image: "/pet.jpg",
    route: "/projects/emissions",
    tech: ["Wireless", "Sensors"]
  },

  {
    title: "MyoWare Prosthetic Hand",
    image: "/prosthetic.jpg",
    route: "/projects/prosthetic",
    tech: ["EMG", "Robotics"]
  },

  {
    title: "Robotic Sprayer",
    image: "/robotics.jpg",
    route: "/projects/robotics",
    tech: ["PLC", "Automation"]
  },

  {
    title: "Access Control System",
    image: "/access.jpg",
    route: "/projects/access-control",
    tech: ["Embedded", "Security"]
  }
];

export default function ProjectsSlider() {
  return (
    <section id="projects">

      <h2 className="section-title">
        Featured Projects
      </h2>

      <div className="slider-container">

        <div className="slider-track">

          {[...projects, ...projects].map((project, index) => (

            <Link
              key={index}
              to={project.route}
              className="project-card"
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-overlay">

                <h3>{project.title}</h3>

                <div className="tag-container">

                  {project.tech.map((tag) => (

                    <span
                      key={tag}
                      className="tag"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
