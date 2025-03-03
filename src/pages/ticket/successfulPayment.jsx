import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SuccessfulPayment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reference_id = searchParams.get("reference");

  console.log("Reference ID:", reference_id);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference_id) {
        alert("No payment reference found!");
        navigate("/dashboard");
        return;
      }

      try {
        const response = await fetch(
          `https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/payments/status?reference=${reference_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        const data = await response.json();
        console.log("Payment Verification Response:", data);

        if (data.status === "success") {
          alert("Payment Successful! Redirecting to dashboard...");
          navigate("/dashboard"); // Redirect user to dashboard
        } else {
          alert("Payment verification failed. Please contact support.");
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        alert("Something went wrong!");
        navigate("/dashboard");
      }
    };

    verifyPayment();
  }, [reference_id, navigate]);

  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold">Verifying Payment...</h2>
      <p>Please wait while we confirm your transaction.</p>
    </div>
  );
};

export default SuccessfulPayment;