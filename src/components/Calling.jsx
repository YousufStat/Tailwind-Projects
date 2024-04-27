import Mask from "../assets/img/Mask.png";
import Icons from "../assets/img/icons.png";
export default function Calling() {
  return (
    <>
      <section className="container mx-auto py-20 text-center">
        <h1 className="font-bold text-xl pb-6">
          Introducing video calling support
        </h1>
        <p className="pb-6">
          Every email, web page, and social media post makes an impression on
          your customers. With our software you can be confident it&apos;s
          impression.
        </p>
        <button className="text-primary font-bold capitalize">
          Explore details
          <span></span>
        </button>

        <div className="relative">
          <img src={Mask} alt="" className="mx-auto" />
          <div className="md:absolute top-40 left-20 w-full md:w-[280px] bg-[#FABF62] text-white font-bold p-10 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] text-left">
            <p>Hi, I’m Andry. Let me know what can I do for you</p>
          </div>
          <div className="md:absolute bottom-40 right-20 w-full md:w-[280px] bg-white text-[#FABF62] font-bold p-10 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] text-left shadow-lg">
            <p>your personal support assistance</p>
          </div>
          <img src={Icons} className="absolute sm:top-[18rem] sm:right-[11rem] md:top-[34rem] md:right-[32rem]"/>
        </div>
      </section>
    </>
  );
}
