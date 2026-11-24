import { useRef } from "react";
import { projects } from "../data/data.js";
import Project from "../components/Project.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Projects = () => {
  const titleRef = useRef(null);
  useScrollReveal(titleRef, ".reveal-item", { y: 30 });

  return (
    <section className="mt-15 md:mt-30 text-center max-w-[1240px] mx-auto">
      {/* Title animates as a group via section-level trigger */}
      <div ref={titleRef}>
        <div className="reveal-item text-[48px] font-bold">
          A small selection of <span className="text-purple">recent projects</span>
        </div>
      </div>
      {/* Each card animates independently via its own useCardReveal */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
