import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googel from "../../assets/googel.png";
import appel from "../../assets/appel.png";
import fac from "../../assets/fac1.png";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess("Registration successful!");
        console.log(setSuccess)
        navigate("/"); 
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.log(err)
    }
  };

  return (
    <div className="flex flex-col items-center text-center mt-32">
      <div className="space-y-4">
        <h1 className="lg:text-5xl sm:text-2xl text-lime-400">Sign Up</h1>
        <p className="lg:text-lg text-neutral-300 sm:text-sm">
          Join our community today! Create an account to unlock exclusive features and personalized experiences.
        </p>
      </div>
      <div className="text-neutral-500 grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          className="bg-neutral-900 border-none p-5 focus:outline-none lg:min-w-md sm:max-w-72 rounded-full"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          className="lg:min-w-md sm:max-w-72 bg-neutral-900 border-none p-5 rounded-full"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="bg-neutral-900 border-none p-5 focus:outline-none lg:min-w-md sm:max-w-72 rounded-full"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your Password"
          className="lg:min-w-md sm:max-w-72 bg-neutral-900 border-none p-5 rounded-full"
        />
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}

      <div className="flex flex-col gap-8 mt-8">
      <button
          onClick={()=>navigate("/Login")}
          className="bg-neutral-800 text-neutral-300 hover:text-neutral-800 hover:font-semibold hover:bg-lime-600 text-sm p-4 rounded-full"
        >
          Login
        </button>
      <button
          onClick={handleSubmit}
          className="bg-neutral-800 text-neutral-300 hover:text-neutral-800 hover:font-semibold hover:bg-lime-600 text-sm p-4 rounded-full"
        >
          Sign Up
        </button>

        <div>
          <div className="h-[2px] bg-neutral-700"></div>
          <p className="p-1 text-neutral-300 bg-neutral-950 absolute -mt-4 left-[47%] text-sm">Or Continue with</p>
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
