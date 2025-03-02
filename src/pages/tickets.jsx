
import { useState, useEffect } from "react";
import TicketDetails from "../components/ticketdetails";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import Sidebar from "../components/sidebar";

function AvailTickets() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/tickets/"
      );
      const data = await response.json();
      setTickets(data.tickets);
      console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="containers">
      <Navbar />
        <div>
          <div className="text-3xl font-bold my-5 text-white">
            Available Tickets
          </div>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-4">
            {loading && (
              <p className="text-white text-2xl">Loading, please wait...</p>
            )}
            {error && <p>Error: {error.message}</p>}
            {tickets.map((ticket) => (
              <div key={ticket._id}>
                <TicketDetails
                  id={ticket._id}
                  image={ticket.banner}
                  title={ticket.name}
                  date={ticket.date}
                  time={ticket.time}
                  venue={ticket.venue}
                  price={ticket.unit_price}
                />
              </div>
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
}
export default AvailTickets;
