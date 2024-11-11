import React from "react";
import { useNavigate, Link } from "react-router-dom";

const BusList = ({ items }) => {
  console.log(items);
  const navigate = useNavigate();
  const dateString = items.schedule.departure_time;
  const date = new Date(dateString);
  const timeOnly = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const dateString2 = items.schedule.arrival_time;
  const date2 = new Date(dateString2);
  const timeOnly2 = date2.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const handleClick = () => {
    navigate(`/checkout/:${items.schedule._id}`);
  };

  const price = Number(items.schedule.total_distance) * 0.5;
  return (
    <div className="flex gap-x-4 w justify-between mx-8 my-8 h-[100px] bg-blue-400 rounded-md px-4 py-4">
      <div>
        <div className="text-xl font-semibold">{items.bus.bus_name}</div>
        <div className="text-sm font-thin my-2">{items.bus.bus_type}</div>
      </div>
      <div>
        <div className="flex gap-x-6 ">
          <div className="text-xl font-semibold">{timeOnly}</div>
          <div className="text-md font-semibold">
            {items.schedule.total_distance + " KM"}
          </div>
          <div className="text-xl font-semibold">{timeOnly2}</div>
        </div>
        <div className="my-1">{price + " Ruppess"}</div>
      </div>

      <div className="">
        <div>{items.schedule.available_seats + "  seats available"}</div>
        <div className="my-2">
          <button
            onClick={handleClick}
            className="py-1 px-6 rounded-md bg-red-600"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusList;
