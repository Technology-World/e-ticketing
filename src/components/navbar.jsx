import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    navigate("/login");

    setLoading(true);
  };

  return (
    <nav className="bg-white w-screen font-bold">
      <div className="flex justify-between items-center py-4 px-8 flex-wrap">
        <div className="flex items-center">
          {/* <img src="/vite.svg" alt="Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-xl font-semibold">Tickets</span>
        </div>
        <div className="flex items-center">
          <Link to="/" className="text-gray-800 hover:text-gray-600 mr-4">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600 mr-4 ">
            About
          </Link>
          <Link
            to="/tickets"
            className="text-gray-800 hover:text-gray-600 mr-4 "
          >
            Tickets
          </Link>
          {/* <a href="#" className="text-gray-800 hover:text-gray-600 ">
            Contact
          </a> */}
        </div>
        <div className="flex items-center">
          <div>
            {username ? (
              <div className="flex items-center">
                <Link to = "/dashboard" className="text-gray-800 mr-4">{username}</Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-800 p-1 rounded-xl border-2 border-red-700 hover:bg-white hover:text-red-800"
                >
                  {loading ? "Logging out..." : "Logout"}
                </button>
              </div>
            ) : (
          <div className="flex items-center gap-5">
            <Link
              to="/login"
              className="text-white bg-green-600 p-2 rounded-lg hover:bg-[#f1f1f3] hover:text-black"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white bg-green-600 p-2 rounded-lg hover:bg-[#191b30] hover:text-white"
            >
              Sign Up
            </Link>
          </div>
           )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
