import { useRef } from "react";
import { experienceDetails } from "../data/data.js";
import Experience from "../components/Experience.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Experiences = () => {
  const titleRef = useRef(null);
  useScrollReveal(titleRef, ".reveal-item", { y: 30 });

  return (
    <section className="mt-15 md:mt-30 max-w-[1240px] mx-auto">
      {/* Title animates via section-level trigger */}
      <div ref={titleRef}>
        <div className="reveal-item text-[48px] text-center font-bold">
          My <span className="text-purple">work experience</span>
        </div>
      </div>
      {/* Each card animates independently via its own useCardReveal */}
      <div className="flex justify-center gap-6 md:gap-10 flex-wrap mt-14">
        {experienceDetails.map((experience) => (
          <Experience key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
