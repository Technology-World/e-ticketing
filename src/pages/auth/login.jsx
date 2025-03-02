/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Sidebar from "../../components/sidebar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const switchShow = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; // initialize loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // try block
    try {
      const response = await fetch(
        "https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1user/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      // set response to data
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);

        // store token, id and username to localstorage
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userId", data.data.id);
        localStorage.setItem("username", data.data.username);
        // route to dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
        alert("Invalid credentials, please try again");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containers">
      <Navbar/>
      <div className="flex items-center pl-12 md:px-10">
        <div className="w-auto mx-auto mt-20 bg-[#b2b8d04d] py-10 px-5 rounded-2xl lg:w-[700px]">
          <h1 className="text-2xl font-bold text-center uppercase">Login</h1>
          <p className="text-[#231f40] font-black">
            Welcome back! Please enter your details.
          </p>

          <form className="mt-8 space-y-4" onSubmit={handleLogin}>
            <div className="input-group">
              <label className="text-sm">Email or Username</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                required
              />
            </div>

            <div className="input-group relative">
              <div className="flex items-center justify-between text-sm">
                <label>Password</label>
                <Link to="/" className="text-white">
                  Forgot password?
                </Link>
              </div>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                value={formData.password}
                onChange={handleChange}
              />
              {show ? (
                <FaEyeSlash
                  onClick={switchShow}
                  className="absolute right-6 top-14 text-gray-400 w-6 cursor-pointer"
                  title="hide password"
                />
              ) : (
                <FaEye
                  onClick={switchShow}
                  className="absolute right-6 top-14 text-gray-400 w-6 cursor-pointer"
                  title="show password"
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-purple-500 text-white px-3 py-3 hover:bg-purple-700 w-full rounded-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="mt-4">
              <p className="text-center ">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-[#231f40] font-semibold">
                  Create account here
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

// html
// css
// tailwind
// event handlers
// useState, useEffect,
// components and props

// PULL
// git add .
// git commit -m "updates"
// git pull origin main
