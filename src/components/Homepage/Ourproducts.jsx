import kif from "../../assets/Container.png";
import satl from "../../assets/satl.png";
import mani from "../../assets/many.png";
export default function Ourproducts() {
  return (
    <div>
      <div className="flex flex-nowrap items-center justify-center gap-28 ">
        <div className="mt-36 flex flex-col pb-20 ">
          <h1 className="text-5xl text-white flex sm:items-center sm:justify-center lg:justify-start lg:text-left pb-4">
            Our <span className="text-lime-400"> Products</span>
          </h1>
          <p className="text-neutral-300 z-20">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your <br /> unique financial needs and
            aspirations
          </p>
        </div>
        <div className="bg-neutral-900 rounded-full text-neutral-200 p-2 mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4">
          <button className="hover:bg-lime-400 hover:text-neutral-900 py-3 px-6 sm:p-4 rounded-full hover:font-semibold w-full sm:w-auto">
            For Individuals
          </button>
          <button className="hover:bg-lime-400 hover:text-neutral-900 py-3 px-6 sm:p-4 rounded-full hover:font-semibold w-full sm:w-auto">
            For Businesses
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-6 text-neutral-300 text-center justify-items-center">
        <div className="w-11/12 md:w-10/12 flex flex-col items-center">
          <img src={kif} className="w-20 h-20 mb-3" />
          <h1 className="lg:text-2xl text-xl font-semibold">
            Checking Accounts
          </h1>
          <p className="text-sm lg:text-base leading-relaxed">
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </p>
        </div>

        <div className="w-11/12 md:w-10/12 flex flex-col items-center">
          <img src={satl} className="w-20 h-20 mb-3" />
          <h1 className="lg:text-2xl text-xl font-semibold">
            Savings Accounts
          </h1>
          <p className="text-sm lg:text-base leading-relaxed">
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether youre saving for a specific goal or
            want to grow your wealth over time, we have the right account for
            you.
          </p>
        </div>

        <div className="w-11/12 md:w-10/12 flex flex-col items-center">
          <img src={mani} className="w-20 h-20 mb-3" />
          <h1 className="lg:text-2xl text-xl font-semibold">
            Loans and Mortgages
          </h1>
          <p className="text-sm lg:text-base leading-relaxed">
            Realize your dreams with our flexible loan and mortgage options.
            From personal loans to home mortgages, our experienced loan officers
            are here to guide you through the application process and help you
            secure the funds you need.
          </p>
        </div>
      </div>
    </div>
  );
}
