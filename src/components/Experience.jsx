import { useRef } from "react";
import { useCardReveal } from "../hooks/useCardReveal";

const Experience = ({ image, role, details }) => {
  const cardRef = useRef(null);
  useCardReveal(cardRef, { y: 36 });

  return (
    <div
      ref={cardRef}
      className="
        w-full max-w-[600px] rounded-md border border-[#363749]/60
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-[#CBACF9]/30
        hover:shadow-[0_0_20px_rgba(203,172,249,0.12)]
      "
    >
      <div className="flex items-center gap-4 bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-4 md:p-14 rounded-md">
        <div className="transition-transform duration-300 hover:scale-110">
          <img alt="" src={image} />
        </div>
        <div>
          <div className="text-[20px] md:text-[26px] font-bold">{role}</div>
          <div className="text-[16px] text-normal">{details}</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
