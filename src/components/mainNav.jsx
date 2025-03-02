// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const MainNavbar = () => {
    const isLoggedIn = !!localStorage.getItem("accessCode");

    return (
      <div className="sidebar">
        {/* Top Navbar (Always Visible) */}
        <Navbar/>
  
        {/* Sidebar + Page Content (Only for Logged-in Users) */}
        <div>
          {isLoggedIn && <Sidebar/>} {/* Show Sidebar only if logged in */}
          <main>
            <Outlet /> {/* This dynamically loads the current page */}
          </main>
        </div>
      </div>
  );
};

export default MainNavbar;

// One navbar on top and the other on one side while the page content displays on the other side (Like flex the second sidebar and page content)
