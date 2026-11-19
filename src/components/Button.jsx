import { TfiArrowTopRight } from "react-icons/tfi";

const Button = ({ text }) => {
  return (
    <button className="flex items-center justify-center gap-2 w-full md:w-fit px-6 py-4 md:py-3 bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white text-base font-medium rounded-md border border-[#6971A2] hover:opacity-80 transition-opacity duration-300 mt-5 md:mt-10">
      {text}
      <TfiArrowTopRight />
    </button>
  );
};

export default Button;
