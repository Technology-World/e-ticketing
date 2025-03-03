import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";

function Profile () {
    const id = localStorage.getItem("userId"); // Get User Id from localStorage
    const token = localStorage.getItem("accessToken"); // Get token from localStorage
    const [user, setUser] = useState(null);

    console.log("User ID:", id);
  
    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const response = await fetch(`https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/users/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!response.ok) throw new Error("Failed to fetch user profile");
  
          const data = await response.json();
          setUser(data);
          console.log("User profile:", data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
  
      if (id) {
        fetchUserProfile();
      }
    }, [id, token]);
  
    return (
      <div className="containers">
        <div className="sidebar">
          <Sidebar />
        <div className="text-white sm:mt-10 lg:ml-10">
        {user ? (
          <div className="items-center">
            <h2 className="text-xl font-bold mb-10 uppercase">User Profile</h2>
            <div className="text-xl bg-[#ffffffbd] text-black p-5">
              <p className="p-3"><span className="font-bold">User Id: </span>{user.user._id}</p>
              <p className="p-3"><span className="font-bold">Username: </span>{user.user.username}</p>
              <p className="p-3"><span className="font-bold">Role: </span>{user.user.role}</p>
              <p className="p-3"><span className="font-bold">Email: </span>{user.user.email}</p>
              <p className="p-3"><span className="font-bold">Profile Created: </span>{user.user.created_at}</p>
            </div>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
        </div>
      </div>
      </div >
    );
}
export default Profile;