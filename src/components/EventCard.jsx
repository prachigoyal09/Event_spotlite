import React from "react";

const EventCard = ({ event, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer p-4 shadow-lg rounded-lg hover:scale-105 transform transition-all"
  >
    <img
      src={event.image}
      alt={event.name}
      className="w-full h-32 object-cover rounded-md"
    />
    <h3 className="mt-2 font-semibold">{event.name}</h3>
    <p className="text-sm">{event.date}</p>
    <p className="text-xs">{event.location}</p>
  </div>
);

export default EventCard;
