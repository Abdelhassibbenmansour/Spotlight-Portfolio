const Experience = ({image,role,details}) => {
  return (
    <div className="w-full max-w-[600px] rounded-md border border-[#363749]/60 ">
      <div className="flex items-center gap-4 bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-4 md:p-14 rounded-md">
        <div>
          <img alt="" src={image} />
        </div>
        <div>
          <div className="text-[20px] md:text-[26px] font-bold">{role}</div>
          <div className="text-[16px] text-normal">{details}</div>
        </div>
      </div>
    </div>
  )
};

export default Experience;
