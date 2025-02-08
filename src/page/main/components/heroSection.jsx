import bg from "../../../assets/bgHero.png";
import desin from "../../../assets/Abstract Design.png";

export default function Hero_Section() {
  return (
    <div className="mt-24 lg:p-10 p-4 bg-[#1C1C1C] rounded-2xl relative flex lg:justify-end lg:flex-row flex-col-reverse">
      <div className="lg:p-15 p-6 bg-[#1A1A1A] z-20 justify-center rounded-2xl pb-20 lg:absolute left-10 top-10 max-w-[658px] lg:text-left text-center -translate-y-9">
        <h1 className="text-gray-300 md:text-5xl text-3xl">
          Welcome to <span className="text-lime-400">YourBank</span> <br />
          Careers
        </h1>
        <p className=" text-gray-300 lg:text-lg md:text-base sm:text-xs mt-5 text-wrap">
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </p>
      </div>
      <div className="z-10 max-w-[715px]">
        <img src={bg} />
      </div>

      <div className="z-0 absolute top-0 right-0">
        <img src={desin} />
      </div>
    </div>
  );
}
