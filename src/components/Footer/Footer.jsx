import logo from "../../assets/Logo.png";
import post from "../../assets/post.png";
import phon from "../../assets/phon.png";
import map from "../../assets/map.png";
import fac from "../../assets/fac.png";
import twi from "../../assets/twi.png";
import link from "../../assets/link.png";

export default function Footer() {
  return (
    <div className="bg-neutral-900 py-10">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-12" />
      </div>

      <div className="text-neutral-300 flex justify-center items-center gap-6 mt-6 pb-6 flex-wrap">
        <button>Home</button>
        <button>Careers</button>
        <button>About</button>
        <button>Security</button>
      </div>

      <div className="h-[1px] bg-neutral-700 w-full"></div>

      <div className="flex flex-wrap justify-center gap-10 p-10 text-neutral-300 text-sm text-center">
        <p className="flex items-center gap-2">
          <img src={post} className="h-5" alt="email" />
          hello@skillbirdge.com
        </p>
        <p className="flex items-center gap-2">
          <img src={phon} className="h-5" alt="phone" />
          +91 91813 23 2309
        </p>
        <p className="flex items-center gap-2">
          <img src={map} className="h-5" alt="location" />
          Somewhere in the World
        </p>
      </div>

      <div className="h-[1px] bg-neutral-700 w-full"></div>

      <div className="flex flex-wrap justify-between items-center px-6 sm:px-12 py-6 text-neutral-300 text-sm ">
        <div className="flex gap-4">
          <button>
            <img src={fac} className="h-6" alt="Facebook" />
          </button>
          <button>
            <img src={twi} className="h-6" alt="Twitter" />
          </button>
          <button>
            <img src={link} className="h-6" alt="LinkedIn" />
          </button>
        </div>

        <p className="text-nowrap text-center flex-1">
          YourBank © All Rights Reserved
        </p>

        <div className="text-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
