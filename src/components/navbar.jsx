import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger + close icons

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="bg-white w-screen font-bold shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-semibold">Tickets</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link to="/tickets" className="text-gray-800 hover:text-gray-600">
            Tickets
          </Link>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center">
          {username ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-gray-800">
                {username}
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-800 p-1 rounded-xl border-2 border-red-700 hover:bg-white hover:text-red-800"
              >
                {loading ? "Logging out..." : "Logout"}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-white bg-green-600 p-2 rounded-lg hover:bg-gray-100 hover:text-black"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white bg-green-600 p-2 rounded-lg hover:bg-gray-900 hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-gray-100 py-4 shadow-inner">
          <Link to="/" className="text-gray-800 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/tickets" className="text-gray-800 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            Tickets
          </Link>

          {username ? (
            <>
              <Link to="/dashboard" className="text-gray-800" onClick={() => setMenuOpen(false)}>
                {username}
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-white bg-red-800 px-4 py-2 rounded-xl border-2 border-red-700 hover:bg-white hover:text-red-800"
              >
                {loading ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="text-white bg-green-600 p-2 rounded-lg hover:bg-gray-100 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white bg-green-600 p-2 rounded-lg hover:bg-gray-900 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
