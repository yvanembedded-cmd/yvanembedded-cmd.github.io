import { Link } from "react-router-dom";

const projects = [
  {
    title:"Smart ATS",
    route:"/projects/ats"
  },

  {
    title:"Smart Biodigester",
    route:"/projects/biodigester"
  },

  {
    title:"FPGA Accelerator",
    route:"/projects/fpga"
  },

  {
    title:"Prosthetic Hand",
    route:"/projects/prosthetic"
  }
];

export default function ProjectsSlider() {

  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="slider-track">

        {projects.map((p)=>(

          <Link
            key={p.title}
            to={p.route}
            className="project-card"
          >
            <h3>{p.title}</h3>
            <p>Click to view details</p>
          </Link>

        ))}

      </div>

    </section>
  );
}
