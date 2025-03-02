/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Confirmation = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {}; // Get passed

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect to sign up if any field is missing or incase of bypassing
  useEffect(() => {
    if (!formData.username || !formData.email || !formData.password) {
      navigate("/signup"); // Redirect to sign up page
    }
  }, [formData, navigate]);

  const confirmSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1user/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        navigate("/login"); // Redirect to homepage or dashboard
      } else {
        console.error("Sign Up failed:", data.message);
        alert(data.message);
      }
    } catch (error) {
      setError(error, "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containers">
      <Navbar />
      <div className="w-auto mx-auto mt-20 bg-[#5470e04d] py-10 px-5 rounded-2xl font-sans text-lg lg:w-[700px]">
        <h2 className="text-center pb-5 font-bold text-xl lg:text-3xl">
          Please confirm your details before submitting
        </h2>
        <p className="py-3">
          <strong className="text-2xl">Username:</strong> {formData.username}
        </p>
        <p className="py-3">
          <strong className="text-2xl">Email:</strong> {formData.email}
        </p>
        <p className="py-3">
          <strong className="text-2xl">Password:</strong>{" "}
          {showPassword
            ? formData.password
            : "•".repeat(formData.password.length)}
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </p>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="grid justify-center lg:flex gap-3 w-full">
          <button
            onClick={confirmSubmit}
            disabled={loading}
            className="bg-blue-400 w-30% rounded-2xl text-lg py-2 px-3 text-white hover:bg-white hover:text-green-700 cursor-pointer"
          >
            {loading ? "Submitting..." : "Confirm & Register"}
          </button>
          <button
            onClick={() => navigate("/signup", { state: formData })}
            className="bg-blue-400 w-30 rounded-2xl text-lg p-2 text-white hover:bg-white hover:text-green-700 cursor-pointer"
          >
            Edit
          </button>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
