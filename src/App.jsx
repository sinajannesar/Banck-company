import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/Creers Page/main/MainCareers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

export default function App() {
  return (
    <div className="bg-zinc-950">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
