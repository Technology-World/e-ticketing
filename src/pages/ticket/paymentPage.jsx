import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentUrl, setPaymentUrl] = useState(null);

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        const response = await fetch(
          "https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/payments/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ 
              ticket_id: id, 
              user_id: localStorage.getItem("userId"), 
              callback_url: "http://localhost:5173/payment-success" // Redirect here after payment
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Payment Response:", data);

        if (data.authorization_url) {
          setPaymentUrl(data.authorization_url);
          window.location.href = data.authorization_url; // Redirect to Paystack
        } else {
          alert("Payment initiation failed!");
        }
      } catch (error) {
        console.error("Error initiating payment:", error);
        alert("Something went wrong!");
        navigate("/dashboard/tickets");
      }
    };

    if (id) {
      initiatePayment();
    } else {
      alert("Invalid Ticket ID!");
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className="containers">
      <div className="sidebar">
        <Sidebar />
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold">Processing Payment...</h2>
      {!paymentUrl && <p target="_blank">Please wait while we redirect you to Paystack.</p>}
      {paymentUrl && (
        <a href={paymentUrl} className="text-red-500 underline" target="_blank">
          Click here if you are not redirected automatically
        </a>
      )}
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default PaymentPage;
