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
      <div className=" flex flex-col w-full items-center">
        <p className="text-center items-center text-6xl text-[white] mt-50 mb-20 mx-auto bg-black p-5">
          Discover your favourite events
        </p>
        <p className="text-white items-center bg-black px-3 py-2 rounded-full">
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
