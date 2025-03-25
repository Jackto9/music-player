import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">🎵 Music Player</h1>
        <p className="text-lg text-gray-300">Your personal music streaming app</p>
      </div>
    </div>
  );
}

export default App;
