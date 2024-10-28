const EventModal = ({ event, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg max-w-md w-full">
      <button
        onClick={onClose}
        className="text-red-500 font-bold text-lg float-right"
      >
        X
      </button>
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-4 text-2xl font-bold">{event.name}</h2>
      <p className="mt-2">
        {event.date} - {event.location}
      </p>
      <p className="mt-4">{event.description}</p>
    </div>
  </div>
);

export default EventModal;
