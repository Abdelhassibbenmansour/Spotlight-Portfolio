import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SpotlightLeft from "../Img/SpotlightLeft.png";
import SpotlightRight from "../Img/SpotlightRight.png";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-item",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.13,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex flex-col items-center text-center gap-6 py-8 w-full relative"
      id="about"
    >
      <img
        src={SpotlightLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 hidden w-[550px] md:block"
      />
      <img
        src={SpotlightRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 hidden w-[550px] md:block"
      />
      <img
        src={SpotlightLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-100px] z-0 w-[420px] max-w-none -translate-x-1/2 rotate-90 md:hidden"
      />
      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Fixed navbar — floats above all content */}
        <div className="hero-item fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
          <Navbar />
        </div>
        {/* Spacer so hero content starts below the fixed navbar */}
        <div className="flex flex-col items-center mt-28 md:mt-32">
          <div className="hero-item text-[16px] font-normal leading-[1.2] tracking-[1.5px] uppercase text-label">
            Dynamic Web Magic with Next.js
          </div>
          <div className="hero-item text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white tracking-[-3.6] leading-tight max-w-5xl mt-3">
            Transforming Concepts into Seamless{" "}
            <span className="span-text">User Experiences</span>
          </div>
          <div className="hero-item text-[16px] md:text-[24px] font-normal max-w-xl text-label mt-3">
            Hi! I'm Adrian, a Next.js Developer based in Croatia.
          </div>
          <div className="hero-item mt-2">
            <Button text="See my work" href="#projects" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
