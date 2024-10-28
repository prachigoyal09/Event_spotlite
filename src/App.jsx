import EventList from "./components/EventList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center font-bold text-xl">
        EventSpot Lite
      </header>
      <main className="p-4">
        <EventList />
      </main>
    </div>
  );
}

export default App;
