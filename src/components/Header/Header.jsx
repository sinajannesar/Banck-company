import { useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/Logo.png";
import menu from "../../assets/menu.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 relative rounded-full border border-neutral-800 z-50 mx-auto max-w-screen-xl">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        <img src={logo} className="h-10" alt="Logo" />

        <nav className="hidden md:flex space-x-6 text-slate-100 [&>button]:p-2">
          {["Home", "Careers", "About", "Security"].map((item) => (
            <button
              key={item}
              className="items-center flex justify-center hover:text-yellow-100 transition-all hover:bg-neutral-700 rounded-full"
            >
              {item}
            </button>
          ))}
        </nav>

        <nav className="hidden text-slate-100 md:flex space-x-3">
          <button className="hover:bg-lime-400 rounded-full hover:text-black transition-all whitespace-nowrap py-3 px-6">
            Sign Up
          </button>
          <button className="hover:bg-lime-400 rounded-full hover:text-black transition-all whitespace-nowrap py-3 px-6">
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
        <nav className="md:hidden bg-neutral-800 transition-all shadow-md absolute top-full right-0 left-0 mx-auto max-w-xs py-2 rounded-lg">
          {["Home", "Careers", "About", "Security"].map((item) => (
            <button key={item} className="block px-4 py-2 hover:text-gray-100 w-full text-left">
              {item}
            </button>
          ))}
          <button className="block px-4 py-2 hover:text-gray-100 w-full text-left">
            Sign Up
          </button>
          <button className="block px-4 py-2 hover:text-gray-100 w-full text-left">
            Login
          </button>
        </nav>
      )}
    </header>
  );
}
