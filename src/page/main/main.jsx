import Header from "../../components/Header/Header";
import Hero from "./components/heroSection";
import OurBenefits from "./components/OurBenefits";
import OurValues from "./components/OurValues";

function MainPage() {
  return (
    <div className="">
      <div className="max-w-[1280px] mx-auto py-8">
        <Header />
        <Hero />
        <OurValues/>
        <OurBenefits/>
      </div>
    </div>
  );
}

export default MainPage;
