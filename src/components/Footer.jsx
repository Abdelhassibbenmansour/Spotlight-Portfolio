import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footerLinks } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = footerRef.current.querySelectorAll(".footer-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",   // very lenient — fires as soon as footer is barely visible
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={footerRef}
      className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center pb-4 mt-15 md:mt-30"
    >
      <div className="footer-item">Copyright &copy; 2026 Abdelhassib</div>
      <div className="flex justify-between items-center gap-4 mt-2">
        {footerLinks.map((link) => (
          <div
            key={link.id}
            className="footer-item p-3 border border-[#363749]/60 rounded-md transition-all duration-300 hover:scale-110 hover:border-[#CBACF9]/40 hover:shadow-[0_0_12px_rgba(203,172,249,0.2)]"
          >
            <img alt={link.id} src={link.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
