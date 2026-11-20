import {footerLinks} from "../data/data";

const Footer = () => {
  return (
    <section className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center pb-4 mt-15  md:mt-30">
      <div>Copyright &copy; 2026 Abdelhassib</div>
      <div className="flex justify-between items-center gap-4 mt-2">
        {footerLinks.map((link) => {
          return (
            <div key={link.id} className="p-3 border border-[#363749]/60 rounded-md">
              <img  alt={link.id} src={link.image} />
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default Footer;
