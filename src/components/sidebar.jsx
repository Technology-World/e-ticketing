import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Sidebar = () => {
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
    <aside>
      <div className="w-full h-auto flex sm:text-sm bg-white justify-between py-3 px-5 items-center lg:items-start lg:justify-normal text-[#2a221d] font-medium lg:text-lg lg:flex-col lg:pt-8 fixed lg:w-auto lg:h-[100vh]">
        <Link to="/dashboard" className="text-green-500 mr-4 capitalize">
          Welcome, {username}
        </Link>
        <Link to="/dashboard" className="sidebar_menu">
          Dashboard
        </Link>
        <Link to="/dashboard/tickets" className="sidebar_menu">
          Tickets
        </Link>
        <Link to="/dashboard/purchasedticket" className="sidebar_menu">
          View tickets purchased
        </Link>
        <Link to="/dashboard/profile" className="sidebar_menu">
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="text-white bg-red-800 p-1 rounded-xl border-2 border-red-700 hover:bg-white hover:text-red-800"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
