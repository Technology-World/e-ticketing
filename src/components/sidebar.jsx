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
      <div className="bg-white w-auto h-[100vh] py-3 px-5 text-[#2a221d] font-medium text-lg flex flex-col pt-8 fixed">
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
        <Link to="#" className="sidebar_menu">
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
