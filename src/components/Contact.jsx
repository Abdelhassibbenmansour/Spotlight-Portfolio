import Button from "./Button";
const Contact = () => {
  return (
    <section className="mt-15  md:mt-30 text-center flex flex-col items-center">
      <div className="text-[35px] md:text-[48px] text-center font-bold leading-[1]">Ready to take <span className="text-purple">your </span>digital <br className="hidden md:block"/> presence to the next level</div>
      <div className="mt-6 text-normal md:text-[18px] ">Reach out me today and let's discuss how i can help achieve your goals.</div>
      <Button text="Contact Me Now"/>
    </section>
  )
};

export default Contact;
