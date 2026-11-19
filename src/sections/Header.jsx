import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SpotlightLeft from "../Img/SpotlightLeft.png";
import SpotlightRight from "../Img/SpotlightRight.png";

const Header = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-8 w-full relative">
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
        <Navbar />
        <div className="flex flex-col items-center mt-14">
          <div className="text-[16px] font-normal leading-[1.2] tracking-[1.5px] uppercase text-label">
            Dynamic Web Magic with Next.js
          </div>
          <div className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white tracking-[-3.6] leading-tight max-w-5xl mt-3">
            Transforming Concepts into Seamless{" "}
            <span className="span-text">User Experiences</span>
          </div>
          <div className="text-[16px] md:text-[24px] font-normal max-w-xl text-label mt-3">
            Hi! I'm Adrian, a Next.js Developer based in Croatia.
          </div>
          <Button text="See my work" href="#projects" />
        </div>
      </div>
    </section>
  );
};

export default Header;
