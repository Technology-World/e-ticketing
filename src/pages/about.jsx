import Navbar from '../components/navbar';
import Footer from '../components/footer';
import aboutImage from "../assets/images/about.jpg";

function About() {
    return (
        <div className='containers'>
        <Navbar />
        <div className="mx-30 flex items-center gap-15 bg-[#ffffff98] text-black mt-25 justify-center p-10">
            <img src={aboutImage} alt="About us" className = "w-[600px] text-white"/>
            <div className=" text-center py-10 mx-auto w-[100%]">
                <h1 className="text-neutral-600 text-5xl font-semibold pb-5">About Us</h1>
                <p className="text-lg font-medium">We understand the power of a live event - the electric atmosphere, the shared emotions, and the memories that last a lifetime. That&#39;s why we have made it our mission to revolutionize the ticketing industry, combining cutting-edge technology with a passion for delivering exceptional experiences.</p>
            </div>
        </div>
        <Footer />
        </div>

    )
}
export default About