/* eslint-disable react/prop-types */
function ViewTickets (props) {
    return (
        <div className="w-full  bg-[#02040aa6] rounded-lg">
        <div className="p-7 font-sans text-white">
          <p><span className="font-bold">Reference Id: </span>{props.ReferenceId}</p>
          <p><span className="font-bold">User Id: </span>{props.host}</p>
          <p><span className="font-bold">Username: </span>{props.user}</p>
          <p><span className="font-bold">Movie Name: </span>{props.name}</p>
          <p><span className="font-bold">Ticket Code: </span>{props.code}</p>
          <p><span className="font-bold">Ticket Id: </span>{props.id}</p>
          <p><span className="font-bold">Price: </span>&#8358;{props.price}</p>
          <p><span className="font-bold">Status: </span>{props.status}</p>
        </div>
        {/* <div className="flex flex-row items-center w-full p-2">
        <button className="text-center font-bold bg-green-500 text-white py-2 px-4 rounded-full cursor-pointer">View Tickets</button>
        </div> */}
        
    </div>
    )
}
export default ViewTickets;