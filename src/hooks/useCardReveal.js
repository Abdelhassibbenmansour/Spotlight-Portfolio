import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Individual card scroll-reveal.
 * Uses the card's own ref as the ScrollTrigger trigger so each card
 * animates independently when it enters the viewport.
 *
 * @param {React.RefObject} ref     - The card element ref
 * @param {object}          options - Optional overrides (y, duration, ease, start)
 */
export function useCardReveal(ref, options = {}) {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: options.y ?? 36 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.65,
          ease: options.ease ?? "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? "top 88%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
