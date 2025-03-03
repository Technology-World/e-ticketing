import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import AvailTickets from "./pages/tickets";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Confirmation from "./pages/auth/confirmation";
import Logout from "./pages/auth/logout";
import DashboardHome from "./pages/dashboard";
import TicketDetails from "./pages/ticket/[id].jsx";
import PaymentPage from "./pages/ticket/paymentPage.jsx";
import SuccessfulPayment from "./pages/ticket/successfulPayment.jsx";
import DashboardTickets from "./pages/dashboard/tickets.jsx";
import UserTickets from "./pages/dashboard/usertickets.jsx";
import Profile from "./pages/dashboard/userprofile.jsx";
// import MainNavbar from "./components/mainNav";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes >
    {/* <Route element={<MainNavbar />}> */}
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="/tickets" element={<AvailTickets />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="ticket/:id" element={<TicketDetails />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/success-payment" element={<SuccessfulPayment />} />
      <Route path="/dashboard/tickets" element={<DashboardTickets />} />
      <Route path="/dashboard/purchasedticket" element={<UserTickets />} />
      <Route path="/dashboard/:id" element={<Profile />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);
