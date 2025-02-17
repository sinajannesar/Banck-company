import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googel from "../../assets/googel.png";
import appel from "../../assets/appel.png";
import fac from "../../assets/fac1.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (data.success) {
        navigate("/Homepage");
      } else {
        setError(data.message);
      }
    } catch (err) {
        setError("Server error. Please try again later.");
        console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center text-center mt-32">
      <div className="space-y-4">
        <h1 className="lg:text-5xl sm:text-2xl text-lime-400">Login</h1>
        <p className="lg:text-lg text-neutral-300 sm:text-sm">
          Welcome back! Please log in to access your account.
        </p>
      </div>
      <div className="text-neutral-500 grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-neutral-900 border-none p-5 focus:outline-none lg:min-w-md sm:max-w-72 rounded-full"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-neutral-900 border-none p-5 w-full focus:outline-none lg:min-w-md sm:max-w-72 rounded-full"
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="flex flex-col gap-8">
        <a href="/SingUP" className="text-neutral-300 pt-8 underline sm:text-sm lg:text-lg">
          Forgot Password?
        </a>
        <div className="flex flex-col gap-8 lg:min-w-md sm:max-h-72">
          <button
            onClick={handleLogin}
            className="bg-neutral-800 text-neutral-300 hover:text-neutral-800 hover:font-semibold hover:bg-lime-600 text-sm p-4 rounded-full"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/SingUP")}
            className="bg-neutral-800 text-neutral-300 hover:text-neutral-800 hover:font-semibold hover:bg-lime-600 text-sm p-4 rounded-full"
          >
            Sign Up
          </button>
        </div>
        <div>
          <div className="h-[2px] bg-neutral-700"></div>
          <p className="p-1 text-neutral-300 bg-neutral-950 absolute -mt-4 left-[47%] text-sm">
            Or Continue with
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <img src={googel} alt="Google" />
          <img src={fac} alt="Facebook" />
          <img src={appel} alt="Apple" />
        </div>
      </div>
    </div>
  );
}
