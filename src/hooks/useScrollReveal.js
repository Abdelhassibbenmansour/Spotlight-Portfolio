import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-up scroll reveal for a container ref.
 * Respects prefers-reduced-motion by skipping animations when requested.
 *
 * @param {React.RefObject} ref        - Container element ref
 * @param {string}          selector   - Child selector to animate (e.g. ".reveal-item")
 * @param {object}          options    - Overrides for gsap fromTo / ScrollTrigger
 */
export function useScrollReveal(ref, selector = ".reveal-item", options = {}) {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const targets = ref.current
        ? ref.current.querySelectorAll(selector)
        : [];
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          ease: options.ease ?? "power2.out",
          stagger: options.stagger ?? 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? "top 85%",
            once: true,
            ...options.scrollTrigger,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, selector, options]);
}
