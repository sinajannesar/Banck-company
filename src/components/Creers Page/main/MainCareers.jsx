import FrequentlyAsked from "./components/FrequentlyAsked";
import Ghablfooter from "./components/Ghablfooter";
import Hero from "./components/heroSection";
import JobOpenings from "./components/JobOpenings";
import OurBenefits from "./components/OurBenefits";
import OurValues from "./components/OurValues";

function MainPage() {
  return (
    <div className="">
      <div className="max-w-[1280px] mx-auto py-8">
        
        <Hero />
        <OurValues/>
        <OurBenefits/>
        <JobOpenings/>
        <FrequentlyAsked/>
        <Ghablfooter/>
      </div>
    </div>
  );
}

export default MainPage;
