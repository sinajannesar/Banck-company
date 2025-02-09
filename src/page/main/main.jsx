import Header from "../../components/Header/Header";
import Hero from "./components/heroSection";
import JobListings from "./components/jobListings";

function MainPage() {
  return (
    <div className="">
      <div className="max-w-[1280px] mx-auto py-8">
        <Header />
        <Hero />
        <JobListings/>
      </div>
    </div>
  );
}

export default MainPage;
