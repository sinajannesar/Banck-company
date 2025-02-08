import bg from "../../../assets/bgHero.png";
import desin from "../../../assets/Abstract Design.png";

export default function Hero_Section() {
  return (
    <div className=" flex justify-center items-center mt-25">
      <div className="w-full max-w-screen-xl bg-neutral-900 rounded-2xl sm:mt-52">
        <div className=" absolute bg-neutral-950 z-20 lg:top-52 flex justify-center flex-col rounded-ee-3xl pb-20">
          <h1 className="text-gray-300 lg:text-6xl md:text-5xl sm:text-3xl p-10 text-nowrap ">
            Welcome to <span className="text-lime-400">YourBank</span> <br />
            Careers
          </h1>
          <p className=" text-gray-300 lg:text-lg lg:text-left  pl-10 sm:text-center  md:text-base sm:text-xs sm:text-nowrap ">
            Join our team and embark on a rewarding journey in the banking
            industry. <br /> At YourBank, we are committed to fostering a
            culture of excellence and <br />
            providing opportunities for professional growth. With a focus on
            <br /> innovation, customer service, and integrity, we strive to
            make a positive <br /> impact in the lives of our customers and
            communities. Join us today and <br /> be a part of our mission to
            shape the future of banking.
          </p>
        </div>
        <div className="z-10 absolute lg:right-32 lg:top-52">
          <img src={bg} className="" />
        </div>

        <div className="z-0 absolute right-20 top-44">
          <img src={desin} />
        </div>
      </div>
    </div>
  );
}
