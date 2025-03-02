/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

const TicketDetails = () => {
  const { id } = useParams();

  const [tickets, setTicket] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  // console.log(error)

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/tickets/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTicket(data.ticket);
      console.log(data);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchProduct();

    if (!token) {
      alert("Please login to access");
      navigate("/login");
    }
  }, []);

  if (loading) {
    return <div className="containers">
      <div className="sidebar">
      <Sidebar />
      
      <div className="text-white text-xl">Loading...</div>
      </div>
      </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleProceedToPayment = () => {
    if (!id) {
      alert("Ticket ID is missing!");
      return;
    }
    navigate(`/payment/${id}`);
  };
  return (
    <div className="containers">
      {/* <Navbar /> */}
      <div className="sidebar">
        <Sidebar />
        <div className="pl-4">
        <h2 className="font-bold uppercase my-6 text-2xl text-white mb-[20px]">
              Ticket Details
            </h2>
        <div className="py-3 w-[80%] grid grid-cols-1 text-white md:grid-cols-2 px-1">
          <div>
            <p className="py-1.5 text-xl">
              <span className="text-blue-400 font-bold">Ticket ID: </span>
              {id}
            </p>
            <p className="py-1.5 text-xl">
              <span className="text-blue-400 font-bold">Title: </span>
              {tickets?.name || "No title available"}{" "}
            </p>
            <p className="py-1.5 text-xl">
              <span className="text-blue-400 font-bold">Caption: </span>
              {tickets.caption}
            </p>
            <p className="py-1.5 text-xl">
              <span className="text-blue-400 font-bold">Movie date: </span>
              {tickets.date}
            </p>
            <p className="py-1.5 text-xl">
              <span className="text-blue-400 font-bold">Movie time: </span>
              {tickets.time}
            </p>
            <p className="py-1.5 text-xl">
              <span className="text-blue-400 font-bold">Venue: </span>
              {tickets.venue}, {tickets.state}
            </p>

            <button onClick={handleProceedToPayment} className="text-center font-bold bg-green-500 text-white py-2 px-4 mt-7 rounded-full cursor-pointer hover:bg-red-500">
              Buy Ticket
            </button>
          </div>
          <div className="h-auto mx-auto">
            <img
              src={tickets.banner}
              alt={`Ticket ${id}`}
              className="w-full h-[200px] md:h-[400px]"
            />
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TicketDetails;
