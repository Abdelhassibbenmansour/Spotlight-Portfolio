import GridCard06 from "../Img/GridCard06.png";

const Presentation = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 md:gap-5 lg:gap-[30px] mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[689fr_521fr] md:gap-5 lg:gap-[30px]">
          <div className="relative bg-[url(./img/GridCard01.png)] bg-no-repeat bg-cover bg-center flex min-h-[320px] items-end overflow-hidden rounded-[23px] border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-5 lg:p-7 md:min-h-0 md:aspect-[689/541]">
            <h2 className="text-[32px] leading-[1.2] font-bold lg:text-4xl">
              I prioritize client <br />collaboration, fostering <br/> open communication
            </h2>
          </div>
          <div className="grid grid-rows-[1fr_1fr] gap-4 md:gap-5 lg:gap-[30px]">
            <div className="relative bg-[url(./img/GridCard02.png)] bg-no-repeat bg-cover bg-center flex min-h-[180px] flex-col justify-start overflow-hidden rounded-[23px] border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-5 lg:p-7 md:min-h-0">
              <h2 className="text-[32px] font-bold  lg:text-[32px]">
                I'm very flexible with time zone communications
              </h2>
            </div>
            <div className="relative bg-[url(./img/GridCard03.png)] bg-no-repeat bg-contain bg-right flex min-h-[180px] flex-col justify-center overflow-hidden rounded-[23px] border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-5 lg:p-7 md:min-h-0">
              <p className="mb-1.5 text-base md:text-sm text-[#c1c2d3]">I constantly try to improve</p>
              <h2 className="text-3xl md:text-xl font-bold leading-tight lg:text-3xl">My tech stack</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[351fr_859fr] md:gap-5 lg:gap-[30px]">
          <div className="grid grid-rows-[1fr_1fr] gap-4 md:gap-5 lg:gap-[30px]">
            <div className="relative bg-[url(./img/GridCard04.png)] bg-no-repeat bg-cover flex min-h-[180px] flex-col justify-start overflow-hidden rounded-[23px] border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-5 lg:p-7 md:min-h-0">
              <h2 className="text-3xl md:text-lg font-bold leading-tight lg:text-[26px]">
                Tech enthusiast with a passion for development.
              </h2>
            </div>
            <div className="relative bg-[url(./img/GridCard05.png)] bg-no-repeat bg-cover flex min-h-[180px] flex-col justify-center text-center items-center overflow-hidden rounded-[23px] border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-5 lg:p-7 md:min-h-0">
              <h2 className="text-3xl font-bold md:text-lg leading-tight lg:text-[30px]">
                Do you want to start a project together?
              </h2>
              <button type="button" className="flex items-center justify-center w-fit px-6 py-2 md:py-3 bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white text-base font-medium rounded-md border border-[#6971A2] hover:opacity-80 transition-opacity duration-300 mt-2 md:mt-4">
                Copy my email address
              </button>
            </div>
          </div>
          <div className="relative flex min-h-[320px] h-full flex-col justify-center overflow-hidden rounded-[23px] border border-[#363749]/60 bg-[#04071d] p-5 lg:p-7 md:min-h-0 md:aspect-[859/390]">
            <img src={GridCard06} alt=""
              className="pointer-events-none absolute right-0 top-0 h-full w-auto max-w-none translate-x-50 translate-y-0 md:translate-x-0 md:h-full md:object-contain"
            />
            <div className="relative z-10">
              <p className="mb-1.5 text-xl tracking-[3px] text-[#c1c2d3] md:font-bold">The inside scoop</p>
              <h2 className="text-4xl font-bold leading-tight lg:text-3xl">
                Currently building a JS Animation library
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Presentation;
