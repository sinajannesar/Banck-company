import lamp from "../../assets/lamp1.png";
import dast from "../../assets/dast.png";
import kolbe from "../../assets/kolbe.png";
import book from "../../assets/book.png";
import desinn from "../../assets/desin2.png";

export default function Usecases() {
  return (
    <div className="flex flex-col items-center lg:items-start px-5">
      
      <div className="mt-10 text-center lg:text-left">
        <h1 className="text-5xl text-lime-400">Use Cases</h1>
        <p className="text-neutral-400 mt-2">
          At YourBank, we cater to the diverse needs of individuals and businesses alike, 
          offering a wide range of financial solutions.
        </p>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-25 mt-12">

        
        <div className="grid grid-cols-2 relative bg-neutral-900 rounded-2xl p-6 lg:p-12 text-neutral-300 gap-5">
          <div className="bg-neutral-950 p-7 flex items-center flex-col rounded-2xl justify-center">
            <img src={lamp} alt="Managing Personal Finances" />
            <p className="pt-4 text-center">Managing Personal Finances</p>
          </div>
          <div className="bg-neutral-950 z-30 p-7 flex items-center flex-col rounded-2xl justify-center">
            <img src={dast} alt="Saving for the Future" />
            <p className="pt-4 text-center">Saving for the Future</p>
          </div>
          <div className="bg-neutral-950 p-7 flex items-center flex-col rounded-2xl justify-center">
            <img src={kolbe} alt="Homeownership" />
            <p className="pt-4 text-center ">Homeownership</p>
          </div>
          <div className="bg-neutral-950 p-7 flex items-center flex-col rounded-2xl justify-center">
            <img src={book} alt="Education Funding" />
            <p className="pt-4 text-center">Education Funding</p>
          </div>
          <div className=" absolute z-10">
          <img src={desinn} alt="Design" className="w-full max-w-[300px] mx-auto lg:max-w-none" />
        </div>
        </div>

        
        <div className="space-y-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-neutral-100 text-3xl">For Individuals</h1>
            <p className="text-neutral-400 sm:text-sm lg:text-lg max-w-xl">
              For individuals, our mortgage services pave the way to homeownership, 
              and our flexible personal loans provide vital support during various life milestones. 
              We also prioritize retirement planning, ensuring a financially secure future for our customers.
            </p>
          </div>

          
          <div className="flex flex-col sm:items-center lg:flex-row lg:justify-center gap-25">
            <div>
              <h1 className="text-lime-400 text-6xl">78%</h1>
              <p className="text-neutral-400 lg:text-lg">
                Secure Retirement <br /> Planning
              </p>
            </div>
            <div>
              <h1 className="text-lime-400 text-6xl">63%</h1>
              <p className="text-neutral-400 lg:text-lg">
                Manageable Debt <br /> Consolidation
              </p>
            </div>
            <div>
              <h1 className="text-lime-400 text-6xl">91%</h1>
              <p className="text-neutral-400 lg:text-lg">
                Reducing financial <br /> burdens
              </p>
            </div>
          </div>

          
          <button className="text-neutral-100 bg-neutral-900 p-4 hover:bg-neutral-800 rounded-full border border-neutral-800">
            Learn More
          </button>
        </div>

    
        
      </div>
    </div>
  );
}
