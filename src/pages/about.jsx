import Navbar from '../components/navbar';
import Footer from '../components/footer';

function About() {
    return (
        <div className='containers'>
        <Navbar />
        <div className="container mx-auto">
            <div className=" text-center py-10 w-200 mx-auto">
                <h1 className=" text-neutral-600 text-5xl font-semibold pb-5">About Us</h1>
                <p className="text-lg text-black font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit sit, at praesentium provident dolores quo suscipit voluptates saepe accusantium voluptas natus. Obcaecati, dolorum porro qui dolor accusamus ducimus error.</p>
            </div>
        </div>
        <Footer />
        </div>

    )
}
export default About