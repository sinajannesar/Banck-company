import Heropage from "./Heropage";
import OurFeatures from "./OurFeatures";
import Ourproducts from "./Ourproducts";
import Usecases from "./Usecases";
import Frequently from "./Frequently"
import OurTestimonials from "./OurTestimonials";
import Ghablfooter from "../Creers Page/main/components/Ghablfooter";

export default function Homepage() {
  return (
    <div>
      <Heropage/>
      <Ourproducts/>
      <Usecases/>
      <OurFeatures/>
      <Frequently/>
      <OurTestimonials/>
      <Ghablfooter/>
    </div>
  )
}
