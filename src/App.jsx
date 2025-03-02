// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Footer from './components/footer';
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="containers">
      <Navbar />
        <div className=" flex flex-col font-bold w-full items-center">
        <p className="text-center items-center text-6xl text-[white] mt-50 mb-20 mx-auto bg-black p-5">Discover your favourite events</p>
        <button className='text-white items-center bg-black px-3 py-2 rounded-full'>Buy ticket</button>
      </div>
      <Footer />
    </div>

  )
}

export default App
