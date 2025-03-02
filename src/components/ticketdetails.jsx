/* eslint-disable react/prop-types */
import {Link}  from "react-router-dom";
function TicketDetails(props) {
  
  return (
    <div className=" bg-blue-500 ">
      <Link to={`/ticket/${props.id}`}>
        <div className="w-full h-[200px] object-cover rounded-lg overflow-hidden md:h-[25px] lg:h-[300px]">
          <img
            src={props.image}
            alt="product img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-5 font-sans text-white">
          <p className="font-medium text-xl py-2">{props.title}</p>
          <p>Id: {props.id}</p>
          <p>Date: {props.date}</p>
          <p>Time: {props.time}</p>
          <p>Venue: {props.venue}</p>
          <p>Price: &#8358;{props.price}</p>
        </div>
        <div className="flex flex-row items-center w-full p-2">
        <button className="text-center font-bold bg-green-500 text-white py-2 px-4 rounded-full cursor-pointer">View details</button>
        </div>
        
      </Link>
    </div>
  );
}
export default TicketDetails;
