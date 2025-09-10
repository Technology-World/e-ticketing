import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state || {
    username: "",
    email: "",
    password: "",
  }; //to check if values were passed from the confirmation page:

  const [formData, setFormData] = useState(initialData);

  const [show, setShow] = useState(false);
  const switchShow = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm", { state: formData }); // Pass data to confirmation page
  };

  return (
    <div className="containers">
      <Navbar />
      <div className="flex items-center p-5 md:px-10">
      <div className="w-full mx-auto mt-10 bg-[#b2b8d04d] p-5 rounded-2xl lg:w-[700px]">
        <h1 className="text-2xl font-bold text-center uppercase">Sign up</h1>
        <p className="text-[#231f40] font-black">
          Welcome! Please enter your details.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group text-[15px] md:text-[25px]">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
                className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
            <div className="input-group text-[15px] md:text-[25px]">
            <label htmlFor="username">Email: </label>
            <input
              type="email"
              name="email"
                className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
            <div className="input-group text-[15px] md:text-[25px] relative">
            <label htmlFor="username">Password: </label>
            <input
              type={show ? "text" : "password"}
              name="password"
                className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {show ? (
              <FaEyeSlash
                onClick={switchShow}
                className="absolute right-6 top-14 md:top-18 text-gray-400 w-6 cursor-pointer"
                title="hide password"
              />
            ) : (
              <FaEye
                onClick={switchShow}
                className="absolute right-6 top-14 md:top-18 text-gray-400 w-6 cursor-pointer"
                title="show password"
              />
            )}
          </div>
          <div className="flex justify-center w-full items-center">
            <button
              type="submit"
              className="bg-blue-700 rounded-lg text-xl px-5 py-3 text-white hover:bg-white hover:text-red-700 cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
