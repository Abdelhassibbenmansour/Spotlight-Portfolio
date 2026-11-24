import { useRef } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useCardReveal } from "../hooks/useCardReveal";

const ProjectCard = ({ image, title, description, technologies, link = "#" }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useCardReveal(cardRef, { y: 44 });

  const handleMouseEnter = () => {
    if (imgRef.current) imgRef.current.style.transform = "scale(1.05)";
  };
  const handleMouseLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = "scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className="
        flex w-full max-w-[600px] h-full flex-col gap-5
        rounded-[23px] border border-[#363749]/60
        bg-gradient-to-br from-[#04071d] to-[#0c0e23]
        p-4 sm:p-5
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_0_28px_rgba(203,172,249,0.15)]
        hover:border-[#CBACF9]/30
      "
      id="projects"
    >
      {/* Image with zoom */}
      <div
        className="aspect-[16/9] w-full overflow-hidden rounded-[10px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold leading-tight text-white lg:text-[28px]">
          {title}
        </h3>
        <p className="text-base leading-snug text-[#c1c2d3] lg:text-xl">
          {description}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          {technologies.map((tech) => (
            <div
              key={tech}
              title={title}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-[#363749]/60
                bg-gradient-to-br from-[#04071d] to-[#0c0e23]
                sm:h-10 sm:w-10
                transition-transform duration-200 hover:scale-110
              "
            >
              <img src={tech} alt={tech} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
            </div>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="group flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#d3b8ff] transition-opacity duration-300 hover:opacity-80 sm:text-base lg:text-lg"
        >
          Check Live Site
          <TfiArrowTopRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
