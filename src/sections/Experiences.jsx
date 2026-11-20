import { experienceDetails } from "../data/data.js";
import Experience from "../components/Experience.jsx";

const Experiences = () => {
  return (
    <section className="mt-15  md:mt-30">
      <div className="text-[48px] text-center font-bold">My <span className="text-purple">work experience</span></div>
      <div className="flex justify-center gap-6 md:gap-10 flex-wrap mt-14">
        {experienceDetails.map((experience) => {
          return (
            <Experience key={experience.id} {...experience} />
          )
        })}
      </div>
    </section>
  )
};

export default Experiences;
