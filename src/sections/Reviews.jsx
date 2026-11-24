import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Person from "../Img/Person.png";
import { companies } from "../data/data.js";
import { useScrollReveal } from "../hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

/* Each company logo reveals independently when it enters the viewport */
const CompanyLogo = ({ company }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 0.6,          // resting opacity matches the hover-off state
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={logoRef}
      className="transition-opacity duration-300 hover:opacity-100 opacity-60"
    >
      <img alt={company.id} src={company.image} />
    </div>
  );
};

const Reviews = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, ".reveal-item", { stagger: 0.1, y: 30 });

  return (
    <section ref={sectionRef} id="testimonials" className="mt-15 md:mt-30 flex flex-col items-center">
      <div className="reveal-item text-[48px] text-center font-bold">
        Kind words from <span className="text-purple">satisfied clients</span>
      </div>
      <div className="reveal-item w-full max-w-[910px] h-auto md:h-[300px] mt-15 px rounded-md border border-[#363749]/60">
        <div className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-md p-6 md:py-12 md:px-16">
          <p className="text-[16px] md:text-[20px]">
            Collaborating with Adrian was an absolute pleasure. His professionalism,
            promptness, and dedication to delivering exceptional results were evident
            throughout our project. Adrian's enthusiasm for every facet of development
            truly stands out. If you're seeking to elevate your website and elevate your
            brand, Adrian is the ideal partner.
          </p>
          <div className="flex items-center gap-2 mt-8">
            <div>
              <img alt="" src={Person} />
            </div>
            <div>
              <div className="text-[20px] font-bold">Michael Johnson</div>
              <div className="text-[14px] text-normal">Director of AlphaStream Technologies</div>
            </div>
          </div>
        </div>
      </div>
      {/* Each logo has its own scroll trigger */}
      <div className="flex justify-between items-center flex-wrap gap-18 mt-14 max-md:hidden">
        {companies.map((company) => (
          <CompanyLogo key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
