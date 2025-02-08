import { useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/Logo.png";
import menu from "../../assets/menu.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 relative rounded-full border border-neutral-800 flex justify-center items-center z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        <img src={logo} className="h-10" alt="Logo" />

        <nav className="hidden md:flex space-x-6 text-slate-100 [&>button]:p-2">
          <button
            href="#"
            className="items-center flex justify-center hover:text-yellow-100 transition-all hover:bg-neutral-700 rounded-full"
          >
            Home
          </button>
          <button
            href="#"
            className="items-center flex justify-center hover:text-yellow-100 transition-all hover:bg-neutral-700 rounded-full"
          >
            Careers
          </button>
          <button
            href="#"
            className="items-center flex justify-center hover:text-yellow-100 transition-all hover:bg-neutral-700 rounded-full"
          >
            About
          </button>
          <button
            href="#"
            className=" items-center flex justify-center hover:bg-neutral-700 transition-all rounded-full"
          >
            Security
          </button>
        </nav>
        <nav className="hidden text-slate-100 md:flex indent-3.5">
          <button className="hover:bg-lime-400 rounded-full hover:text-black transition-all  whitespace-nowrap py-3 px-6">
            Sign Up
          </button>
          <button className="hover:bg-lime-400 rounded-full hover:text-black transition-all  whitespace-nowrap py-3 px-6">
            Login
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} className="text-white transition-all" />
          ) : (
            <img src={menu} className="transition-all" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-neutral-800 transition-all shadow-md absolute top-full  py-2 right-9 mt-3 rounded-lg">
          <button href="#" className="block px-4 py-2 hover:text-gray-100">
            Home
          </button>
          <button href="#" className="block px-4 py-2 hover:text-gray-100">
            Careers
          </button>
          <button href="#" className="block px-4 py-2 hover:text-gray-100">
            About
          </button>
          <button href="#" className="block px-4 py-2 hover:text-gray-100">
            Security
          </button>
          <button className=" block  hover:text-gray-100 px-4 py-2 transition-all ">
            Sign Up
          </button>
          <button className="block   px-4 py-2 hover:text-gray-100  ">
            Login
          </button>
        </nav>
      )}
    </header>
  );
}
