import React, { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample song list
  const songs = [
    { id: 1, title: "Song One", artist: "Artist A" },
    { id: 2, title: "Song Two", artist: "Artist B" },
    { id: 3, title: "Song Three", artist: "Artist C" },
  ];

  // Toggle Play/Pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-lg font-semibold">Now Playing</h2>
        <p className="text-gray-600">{isPlaying ? "Playing..." : "Paused"}</p>

        {/* Play/Pause Button */}
        <button 
          className={`mt-4 px-4 py-2 rounded ${
            isPlaying ? "bg-red-500" : "bg-blue-500"
          } text-white`}
          onClick={togglePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Song List */}
      <div className="mt-6 w-full max-w-md">
        <h3 className="text-lg font-semibold text-center">Song List</h3>
        <ul className="mt-2 bg-white shadow rounded-lg p-4">
          {songs.map((song) => (
            <li key={song.id} className="border-b py-2 last:border-none text-center">
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicPlayer;
