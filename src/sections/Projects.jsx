import { projects } from "../data/data.js";
import Project from "../components/Project.jsx";

const Projects = () => {
  return (
    <section className="mt-15 md:mt-30 text-center">
    <div className="text-[48px] font-bold">A small selection of <span className="text-purple">recent projects</span></div>
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
    </section>
  )
};

export default Projects;
