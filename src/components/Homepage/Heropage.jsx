import desin1 from "../../assets/desin1.png";
import tick from "../../assets/tick.png";
import bghome from "../../assets/bghome.png";
import flesh from "../../assets/fleshhome.png";

export default function Heropage() {
  return (
    <div>
      <div className="absolute top-0 left-0 ">
        <img src={desin1} alt="Design Element" className="w-full h-auto" />
      </div>
      <div className="relative w-full min-h-screen px-6 py-10 flex flex-col items-center">
        

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl gap-36">
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-lg">
            <p className="flex items-center justify-center lg:justify-start w-fit p-3 gap-2 bg-neutral-900 rounded-full text-neutral-100 text-sm md:text-lg">
              <img
                src={tick}
                className="w-5 h-5 md:w-6 md:h-6"
                alt="Tick Icon"
              />
              No LLC Required, No Credit Check.
            </p>
            <h1 className="text-3xl md:text-5xl text-neutral-100 font-bold leading-tight">
              Welcome to YourBank <br />
              Empowering Your
              <span className="text-lime-400">
                Financial <br /> Journey
              </span>
            </h1>
            <p className="text-neutral-300 text-sm md:text-lg leading-relaxed">
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers needs.
            </p>

            <button className="bg-lime-400 hover:bg-lime-300 transition-all rounded-full px-6 py-3 w-fit mx-auto lg:mx-0">
              Open Account
            </button>
          </div>

          <div className="relative w-full max-w-lg flex justify-center items-center">
            <img
              src={bghome}
              className="relative w-full object-cover z-10"
              alt="Background Home"
            />
            <img
              src={flesh}
              className="absolute top-0 right-1 md:top-20 md:right-10 w-40 md:w-52 z-0"
              alt="Flesh Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
