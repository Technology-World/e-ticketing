// import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Navbar from "../../components/navbar";
function DashboardHome() {
  const navigate = useNavigate();
  let token = localStorage.getItem("accessToken");

  // useEffect(() => {
  //   if (!token) {
  //     alert("Please login");
  //     navigate("/login");
  //   }
  // }, [token, navigate]);

  const [username, setUsername] = useState("");
    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
      if (!token) {
        alert("Please login");
        navigate("/login");
      }
    }, [token, navigate]);

        // check for token to redirect to login if it doesn't exist
    //   if (!token) {
    //     navigate("/login");
    //   } setTimeout(() => {
    //     alert("Please login to acess");
    //     navigate("/login");
    //   }, 1000)
      
    // }, [token, navigate]);

  return (
    <div className="containers">
      {/* <Navbar /> */}
      <div className="sidebar">
      <Sidebar />
      <div>
        <h2>Welcome {username} to Your Dashboard</h2>
      </div>
      </div>
      
      <Footer />
    </div>
  );
}
export default DashboardHome;
