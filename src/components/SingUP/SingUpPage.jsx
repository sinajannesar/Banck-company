import googel from "../../assets/googel.png";
import appel from "../../assets/appel.png";
import fac from "../../assets/fac1.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center text-center mt-32 ">
      <div className="space-y-4">
        <h1 className="lg:text-5xl sm:text-2xl text-lime-400 ">Sign Up</h1>
        <p className="lg:text-lg text-neutral-300 sm:text-sm">
          Join our community today! Create an account to unlock exclusive
          features and personalized experiences.{" "}
        </p>
      </div>
      <div className="text-neutral-500 grid sm:grid-cols-1 lg:grid-cols-2  gap-6  mt-16 ">
        <input
          type="Name"
          placeholder="Enter First Name"
          className=" bg-neutral-900 border-none p-5  focus:outline-none relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-lime-400 after:transition-all after:duration-300 focus:after:w-full lg:min-w-md sm:max-w-72 rounded-full"
        />

        <input
          type="LastName"
          placeholder="Enter Last Name"
          className="lg:min-w-md sm:max-w-72 bg-neutral-900 border-none p-5 w-full focus:outline-none relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-lime-400 after:transition-all after:duration-300 focus:after:w-full rounded-full"
        />
        <input
          type="Email"
          placeholder="Enter your Email"
          className=" bg-neutral-900 border-none p-5  focus:outline-none relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-lime-400 after:transition-all after:duration-300 focus:after:w-full lg:min-w-md sm:max-w-72 rounded-full"
        />

        <input
          type="password"
          placeholder="Enter your Password"
          className="lg:min-w-md sm:max-w-72 bg-neutral-900 border-none p-5 w-full focus:outline-none relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-lime-400 after:transition-all after:duration-300 focus:after:w-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex flex-col gap-8 lg:min-w-md sm:max-h-72">
          <button
            onClick={() => navigate("./Homepage")}
            className="bg-neutral-800 text-neutral-300 hover:text-neutral-800 hover:font-semibold hover:bg-lime-600  text-sm p-4 rounded-full "
          >
            Login
          </button>
          <button
            onClick={() => navigate("./SingUP")}
            className="bg-neutral-800 text-neutral-300 hover:text-neutral-800 hover:font-semibold hover:bg-lime-600  text-sm p-4 rounded-full "
          >
            Sing Up
          </button>
        </div>
        <div>
          <div className=" h-[2px] bg-neutral-700"></div>
          <p className=" p-1 text-neutral-300 bg-neutral-950 absolute -mt-4 left-[47%]  text-sm  ">
            Or Continue with
          </p>
        </div>

        <div className="flex gap-5 items-center justify-center ">
          <img src={googel} alt="" />
          <img src={fac} alt="" />
          <img src={appel} alt="" />
        </div>
      </div>
    </div>
  );
}
