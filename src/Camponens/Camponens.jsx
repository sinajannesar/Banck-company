//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hero_Section from "./Main/Careers Page/Hero_Section";
import Job_Listings from "./Main/Job Listings/Job_Listings";
export default function Camponens() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Header />
      <Hero_Section />
      <Job_Listings />
      
    </div>
  );
}
