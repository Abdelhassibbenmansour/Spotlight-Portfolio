import Person from "../Img/Person.png";
import {companies} from "../data/data.js";

const Reviews = () => {
  return (
    <section className="mt-15  md:mt-30 flex flex-col items-center">
      <div className="text-[48px] text-center font-bold">Kind words from <span className="text-purple">satisfied clients</span></div>
      <div className="w-full max-w-[910px] h-auto md:h-[300px] mt-15 px rounded-md border border-[#363749]/60">
        <div className="bg-gradient-to-r from-[#04071D] to-[#0C0E23]  rounded-md p-6 md:py-12 md:px-16" >
          <p className="text-[16px] md:text-[20px]">Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.</p>
          <div className="flex items-center gap-2 mt-8">
            <div>
              <img alt="" src={Person}/>
            </div>
            <div>
              <div className="text-[20px] font-bold">Michael Johnson</div>
              <div className="text-[14px] text-normal">Director of AlphaStream Technologies</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-18 mt-14 max-md:hidden">
        {companies.map((company) => {
          return (
            <div key={company.id}>
              <img alt={company.image} src={company.image} />
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default Reviews;
