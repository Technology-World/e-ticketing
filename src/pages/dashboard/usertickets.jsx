/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ViewTickets from "../../components/viewtickets";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const UserTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const loggedInUserId = localStorage.getItem("username"); // Assuming user ID is stored here

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          `https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/payments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tickets");
        }

        const data = await response.json();
        console.log(data);

        // 🔥 Filter only the logged-in user's tickets
        const userTickets = data.filter(
          (payment) => payment.user === loggedInUserId
        );
        setTickets(userTickets);
      } catch (err) {
        setError(err.message);
        setTimeout(() => navigate("/dashboard"), 3000);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken && loggedInUserId) {
      fetchTickets();
    } else {
      setError("User not logged in.");
      setLoading(false);
    }
  }, [accessToken, loggedInUserId]);

  if (loading) {
    return <div className="containers">
      <div className="sidebar">
      <Sidebar />
      
      <div className="text-white text-xl">Loading...</div>
      </div>
      </div>;
  }
  if (error) {
    return <p className="text-red-500">Error: {error}</p>
};

  return (
    <div className="containers">
      <div className="sidebar pb-20">
        <Sidebar />
        <div className="m-5">
          <h2 className="text-2xl font-bold mb-4 px-4 text-white">My Purchased Tickets</h2>
          {tickets.length === 0 ? (
            <p>No tickets purchased yet.</p>
          ) : (
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-[#ffffffbd] text-black p-5">
              {tickets.map((user) => (
                <div key={user.id}>
                  <ViewTickets
                    ReferenceId={user.reference_id}
                    status={user.status}
                    host={user.host}
                    name={user.ticket_name}
                    user={user.user}
                    code={user.ticket_code}
                    id={user.id}
                    price={user.amount}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserTickets;

// export default UserTickets;
