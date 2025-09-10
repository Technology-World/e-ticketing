/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Footer from "./components/footer";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="containers">
      <Navbar />
      <div className=" grid grid-cols-1 w-full items-center md:flex flex-col p-5">
        <p className="md:text-center items-center text-3xl md:text-6xl text-[white] my-20 mb-20 mx-auto bg-black md:p-5">
          Discover your favourite events
        </p>
        <p className="w-auto text-white items-center md:bg-gray-900 md:px-3 py-2 rounded-full">
          Buy ticket, Host and promote your events
        </p>
        <p className="text-white items-center pt-5">
          It's Easy, Exceptional with Exciting Experiences..
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
