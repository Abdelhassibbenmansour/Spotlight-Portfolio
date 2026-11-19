import projects from "../data/data.js";
import Project from "../components/Project.jsx";

const Projects = () => {
  return (
    <section className="mt-14">
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
    </section>
  )
};

export default Projects;
