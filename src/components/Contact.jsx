import { useRef } from "react";
import Button from "./Button";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Contact = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, ".reveal-item", { stagger: 0.12, y: 30 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mt-15 md:mt-30 text-center flex flex-col items-center"
    >
      <div className="reveal-item text-[35px] md:text-[48px] text-center font-bold leading-[1]">
        Ready to take <span className="text-purple">your </span>digital{" "}
        <br className="hidden md:block" /> presence to the next level
      </div>
      <div className="reveal-item mt-6 text-normal md:text-[18px]">
        Reach out me today and let's discuss how i can help achieve your goals.
      </div>
      <div className="reveal-item mt-2">
        <Button text="Contact Me Now" />
      </div>
    </section>
  );
};

export default Contact;
