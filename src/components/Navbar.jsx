import { useState } from "react";
import clsx from "clsx";
import { navItems } from "../data/data";

const Navbar = () => {
  const [active, setActive] = useState("About");

  const handleClick = (e, item) => {
    e.preventDefault();
    setActive(item.label);
    const target = document.getElementById(item.sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-px w-full md:w-[451px] h-[66px] mx-auto rounded-lg bg-gradient-to-r from-[#6971A229] to-[#272A3C5E]">
      <nav className="w-full h-full flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-md px-6">
        <ul className="flex items-center gap-6 relative">
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <li key={item.id} className="relative flex flex-col items-center">
                <a
                  href={`#${item.sectionId}`}
                  onClick={(e) => handleClick(e, item)}
                  className={clsx(
                    "text-md font-medium whitespace-nowrap transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded",
                    isActive ? "text-white" : "text-[var(--color-normal)]"
                  )}
                >
                  {item.label}
                </a>
                <span
                  className={clsx(
                    "absolute -bottom-[18px] w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-300 ease-in-out",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

